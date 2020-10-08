import React, { useContext, useRef, useMemo, useEffect } from 'react';
import BaseBarStack from '@visx/shape/lib/shapes/BarStack';
import BaseBarStackHorizontal from '@visx/shape/lib/shapes/BarStackHorizontal';
import {
  BarStack as BaseBarStackType,
  BaseBarStackProps,
  PositionScale,
} from '@visx/shape/lib/types';
import { ScaleInput } from '@visx/scale';
import { extent } from 'd3-array';
import { BarSeriesProps } from './BarSeries';
import DataContext from '../../context/DataContext';
import { DataContextType, DataRegistryEntry } from '../../types';

const STACK_ACCESSOR = <XScale extends PositionScale, YScale extends PositionScale>(
  d: Pick<CombinedData<XScale, YScale>, 'stack'>,
) => d.stack;

type CombinedData<XScale extends PositionScale, YScale extends PositionScale> = {
  [dataKey: string]: ScaleInput<XScale> | ScaleInput<YScale>;
} & { stack: ScaleInput<XScale> | ScaleInput<YScale>; positiveSum: number; negativeSum: number };

export type BarStackProps<
  XScale extends PositionScale,
  YScale extends PositionScale,
  Datum extends object
> = {
  /** Whether to render the Stack horizontally instead of vertically. */
  horizontal?: boolean;
  /** `BarSeries` elements */
  children: JSX.Element | JSX.Element[];
} & Omit<React.SVGProps<SVGRectElement>, 'x' | 'y' | 'width' | 'height' | 'ref'> &
  Pick<BaseBarStackProps<Datum, string, XScale, YScale>, 'order' | 'offset'>;

function isChildWithProps<P extends object>(
  child: React.ReactNode,
): child is React.ComponentType<P> {
  return !!child && typeof child === 'object' && 'props' in child && child.props != null;
}

function BarStack<
  XScale extends PositionScale,
  YScale extends PositionScale,
  Datum extends object
>({ children, horizontal }: BarStackProps<XScale, YScale, Datum>) {
  const { xScale, yScale, colorScale, dataRegistry, registerData, unregisterData } = useContext(
    DataContext,
  ) as DataContextType<XScale, YScale, Datum>;

  const barSeriesChildren = useMemo(
    () =>
      React.Children.toArray(children).filter(child =>
        isChildWithProps<BarSeriesProps<XScale, YScale, Datum>>(child),
      ),
    [children],
  ) as React.ReactElement<BarSeriesProps<XScale, YScale, Datum>>[];

  // extract data keys from child series
  const dataKeys: string[] = useMemo(
    () => barSeriesChildren.map(child => child.props.dataKey ?? '').filter(key => key),
    [barSeriesChildren],
  );

  // use a ref to the stacks for mouse/touch events
  const stacks = useRef<BaseBarStackType<CombinedData<XScale, YScale>, string>[] | null>(null);

  // group all child data by stack value, this format is needed by BaseBarStack
  const combinedData: CombinedData<XScale, YScale>[] = useMemo(() => {
    const dataByStackValue: {
      [stackValue: string]: CombinedData<XScale, YScale>;
    } = {};

    barSeriesChildren.forEach(child => {
      const { dataKey, data = [], xAccessor, yAccessor } = child.props;

      // this should exist but double check
      if (!xAccessor || !yAccessor) return;

      data.forEach(d => {
        const stack = (horizontal ? yAccessor : xAccessor)(d);
        const numericValue = (horizontal ? xAccessor : yAccessor)(d);
        const stackKey = String(stack);
        if (!dataByStackValue[stackKey]) {
          dataByStackValue[stackKey] = { stack, positiveSum: 0, negativeSum: 0 };
        }
        dataByStackValue[stackKey][dataKey] = numericValue;
        dataByStackValue[stackKey][
          numericValue >= 0 ? 'positiveSum' : 'negativeSum'
        ] += numericValue;
      });
    });

    return Object.values(dataByStackValue);
  }, [horizontal, barSeriesChildren]);

  // update the domain to account for the (directional) stacked value
  const comprehensiveDomain = useMemo(
    () =>
      extent<number, number>(
        combinedData.map(d => d.positiveSum).concat(combinedData.map(d => d.negativeSum)),
        d => d,
      ) as [number, number],
    [combinedData],
  );

  // register all child data
  useEffect(() => {
    const dataToRegister: DataRegistryEntry<XScale, YScale, Datum>[] = barSeriesChildren.map(
      (child, index) => {
        const { dataKey: key, data, xAccessor, yAccessor } = child.props;
        const entry: DataRegistryEntry<XScale, YScale, Datum> = { key, data, xAccessor, yAccessor };

        if (comprehensiveDomain.length > 0 && index === 0) {
          if (horizontal) {
            entry.xScale = (scale: XScale) =>
              scale.domain(
                extent<number | ScaleInput<XScale>, number | ScaleInput<XScale>>(
                  [...scale.domain(), ...comprehensiveDomain],
                  d => d,
                ),
              );
          } else {
            entry.yScale = (scale: YScale) =>
              scale.domain(
                extent<number | ScaleInput<YScale>, number | ScaleInput<YScale>>(
                  [...scale.domain(), ...comprehensiveDomain],
                  d => d,
                ),
              );
          }
        }

        return entry;
      },
    );

    registerData(dataToRegister);

    // unregister data on unmount
    return () => unregisterData(Object.keys(dataToRegister));
  }, [horizontal, comprehensiveDomain, registerData, unregisterData, barSeriesChildren]);

  // if scales and data are not available in the registry, bail
  if (dataKeys.some(key => dataRegistry.get(key) == null) || !xScale || !yScale || !colorScale) {
    return null;
  }

  const hasSomeNegativeValues =
    comprehensiveDomain.length > 0 && comprehensiveDomain.some(num => num < 0);

  const stackProps = {
    data: combinedData,
    keys: dataKeys,
    xScale,
    yScale,
    color: colorScale,
    offset: hasSomeNegativeValues ? 'diverging' : undefined,
  } as const;

  const renderStacks = (barStacks: BaseBarStackType<CombinedData<XScale, YScale>, string>[]) => {
    // use this reference to find nearest mouse values
    stacks.current = barStacks;
    return barStacks.map((barStack, stackIndex) => (
      <React.Fragment key={stackIndex}>
        {barStack.bars.map(({ bar, index, key, color, ...rest }) => (
          <rect key={`${stackIndex}-${key}-${index}`} {...rest} fill={color} stroke="transparent" />
        ))}
      </React.Fragment>
    ));
  };

  return horizontal ? (
    <BaseBarStackHorizontal {...stackProps} y={STACK_ACCESSOR}>
      {renderStacks}
    </BaseBarStackHorizontal>
  ) : (
    <BaseBarStack {...stackProps} x={STACK_ACCESSOR}>
      {renderStacks}
    </BaseBarStack>
  );
}

export default BarStack;
