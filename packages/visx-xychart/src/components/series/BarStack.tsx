import React, { useContext, useRef, useMemo, useEffect } from 'react';
import { AxisScale } from '@visx/axis';
import BaseBarStack from '@visx/shape/lib/shapes/BarStack';
import { BarStack as BaseBarStackType } from '@visx/shape/lib/types';
import { ScaleInput } from '@visx/scale';
import { extent } from 'd3-array';
import BarSeries, { BarSeriesProps } from './BarSeries';
import DataContext from '../../context/DataContext';
import { DataContextType, DataRegistryEntry } from '../../types';

const STACK_ACCESSOR = <XScale extends AxisScale, YScale extends AxisScale>(
  d: Pick<CombinedData<XScale, YScale>, 'stack'>,
) => d.stack;

type CombinedData<XScale extends AxisScale, YScale extends AxisScale> = {
  [dataKey: string]: ScaleInput<XScale> | ScaleInput<YScale>;
} & { stack: ScaleInput<XScale> | ScaleInput<YScale>; positiveSum: number; negativeSum: number };

export type BarStackProps = {
  horizontal?: boolean;
  children: typeof BarSeries;
} & Omit<React.SVGProps<SVGRectElement>, 'x' | 'y' | 'width' | 'height' | 'ref'>;

function isChildWIthProps<P extends object>(child: React.ReactNode): child is React.FC<P> {
  return !!child && typeof child === 'object' && 'props' in child && child.props != null;
}

function BarStack<XScale extends AxisScale, YScale extends AxisScale, Datum extends object>({
  children,
  horizontal,
}: BarStackProps) {
  const { xScale, yScale, colorScale, dataRegistry, registerData, unregisterData } = useContext(
    DataContext,
  ) as DataContextType<XScale, YScale, Datum>;

  const barSeriesChildren = useMemo(
    () =>
      React.Children.toArray(children).filter(child =>
        isChildWIthProps<BarSeriesProps<XScale, YScale, Datum>>(child),
      ),
    [children],
  ) as React.ReactElement<BarSeriesProps<XScale, YScale, Datum>>[];

  // extract data keys from child series
  const dataKeys: string[] = useMemo(
    () => barSeriesChildren.map(child => child.props.dataKey ?? '').filter(key => key),
    [barSeriesChildren],
  );

  // use a ref to the stacks for mouse/touch events
  const stacks = useRef<BaseBarStackType<Datum, string>[] | null>(null);

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

  const hasSomeNegativeValues = comprehensiveDomain.some(num => num < 0);

  return (
    // @TODO types
    <BaseBarStack<Datum, string, XScale, YScale>
      data={combinedData}
      keys={dataKeys}
      x={STACK_ACCESSOR}
      xScale={xScale}
      yScale={yScale}
      color={colorScale}
      offset={hasSomeNegativeValues ? 'diverging' : undefined}
      // @TODO support all BarStack props
    >
      {barStacks => {
        // use this reference to find nearest mouse values
        stacks.current = barStacks;
        return barStacks.map((barStack, stackIndex) => (
          <React.Fragment key={stackIndex}>
            {barStack.bars.map(({ bar, index, key, color, ...rest }) => (
              <rect
                key={`${stackIndex}-${key}-${index}`}
                {...rest}
                fill={color}
                stroke="transparent"
              />
            ))}
          </React.Fragment>
        ));
      }}
    </BaseBarStack>
  );
}

export default BarStack;
