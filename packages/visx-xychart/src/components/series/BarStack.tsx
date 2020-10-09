import React, { useContext, useCallback, useRef, useMemo, useEffect } from 'react';
import { stack as d3stack } from 'd3-shape';
import { BaseBarStackProps, PositionScale, SeriesPoint } from '@visx/shape/lib/types';
import stackOffset from '@visx/shape/lib/util/stackOffset';
import stackOrder from '@visx/shape/lib/util/stackOrder';

import { ScaleInput } from '@visx/scale';
import { extent } from 'd3-array';
import getBandwidth from '@visx/shape/lib/util/getBandwidth';
import { BarSeriesProps } from './BarSeries';
import DataContext from '../../context/DataContext';
import { DataContextType, DataRegistryEntry } from '../../types';
import TooltipContext from '../../context/TooltipContext';
import useEventEmitter, { HandlerParams } from '../../hooks/useEventEmitter';
import findNearestDatumY from '../../utils/findNearestDatumY';
import findNearestDatumX from '../../utils/findNearestDatumX';
import isValidNumber from '../../typeguards/isValidNumber';

type CombinedData<XScale extends PositionScale, YScale extends PositionScale> = {
  [dataKey: string]: ScaleInput<XScale> | ScaleInput<YScale>;
} & { stack: ScaleInput<XScale> | ScaleInput<YScale>; positiveSum: number; negativeSum: number };

const STACK_ACCESSOR = <XScale extends PositionScale, YScale extends PositionScale>(
  d: Pick<CombinedData<XScale, YScale>, 'stack'>,
) => d.stack;

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
>({ children, horizontal, order, offset }: BarStackProps<XScale, YScale, Datum>) {
  const { xScale, yScale, colorScale, dataRegistry, registerData, unregisterData } = useContext(
    DataContext,
  ) as DataContextType<XScale, YScale, SeriesPoint<CombinedData<XScale, YScale>>>;

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

  // group all child data by stack value, this format is needed by d3Stack
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

  const stackedData = useMemo(() => {
    const hasSomeNegativeValues =
      comprehensiveDomain.length > 0 && comprehensiveDomain.some(num => num < 0);

    const stack = d3stack<CombinedData<XScale, YScale>, string>();
    stack.keys(dataKeys);
    if (order) stack.order(stackOrder(order));
    if (offset || hasSomeNegativeValues) stack.offset(stackOffset(offset || 'diverging'));

    return stack(combinedData);
  }, [combinedData, dataKeys, comprehensiveDomain, order, offset]);

  // register all child data using the stack-transformed values
  useEffect(() => {
    const dataToRegister = barSeriesChildren
      .map((child, childIndex) => {
        const { dataKey: key } = child.props;
        const stackedDataForKey = stackedData.find(d => d.key === key);

        if (stackedDataForKey) {
          const getStack = (bar: SeriesPoint<CombinedData<XScale, YScale>>) => bar.data.stack;
          const getNumericValue = ([, barTop]: SeriesPoint<CombinedData<XScale, YScale>>) => barTop;
          const entry: DataRegistryEntry<
            XScale,
            YScale,
            SeriesPoint<CombinedData<XScale, YScale>>
          > = {
            key,
            data: stackedDataForKey,
            xAccessor: horizontal ? getNumericValue : getStack,
            yAccessor: horizontal ? getStack : getNumericValue,
          };

          if (comprehensiveDomain.length > 0 && childIndex === 0) {
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
        }
        return null;
      })
      .filter(entry => entry) as DataRegistryEntry<
      XScale,
      YScale,
      SeriesPoint<CombinedData<XScale, YScale>>
    >[];

    registerData(dataToRegister);

    // unregister data on unmount
    return () => unregisterData(Object.keys(dataToRegister));
  }, [
    comprehensiveDomain,
    horizontal,
    stackedData,
    registerData,
    unregisterData,
    barSeriesChildren,
  ]);

  // if scales and data are not available in the registry, bail
  if (dataKeys.some(key => dataRegistry.get(key) == null) || !xScale || !yScale || !colorScale) {
    return null;
  }

  const barThickness = getBandwidth(horizontal ? yScale : xScale);

  return (
    <g className="visx-bar-stack">
      {stackedData.map((barStack, stackIndex) => {
        const entry = dataRegistry.get(barStack.key);

        return entry
          ? barStack.map((bar, index) => {
              const barLength = horizontal
                ? (xScale(bar[1]) || 0) - (xScale(bar[0]) || 0)
                : (yScale(bar[0]) || 0) - (yScale(bar[1]) || 0);

              const barY = horizontal
                ? 'bandwidth' in yScale
                  ? yScale(STACK_ACCESSOR(bar.data))
                  : Math.max((yScale(STACK_ACCESSOR(bar.data)) || 0) - barThickness / 2)
                : yScale(entry.yAccessor(bar));

              const barX: number | undefined = horizontal
                ? xScale(bar[0])
                : 'bandwidth' in xScale
                ? xScale(STACK_ACCESSOR(bar.data))
                : Math.max((xScale(STACK_ACCESSOR(bar.data)) || 0) - barThickness / 2);

              return isValidNumber(barX) && isValidNumber(barY) ? (
                <rect
                  key={`${stackIndex}-${barStack.key}-${index}`}
                  x={barX ?? 0}
                  y={barY ?? 0}
                  width={horizontal ? barLength : barThickness}
                  height={horizontal ? barThickness : barLength}
                  fill={colorScale(barStack.key)}
                  stroke="transparent"
                />
              ) : null;
            })
          : null;
      })}
    </g>
  );
}

export default BarStack;
