import type { TickerProperty } from '@/app/api/ticker/route';
import React, { useCallback, useMemo } from 'react';
import { Sprite } from './sprite';
import classNames from 'classnames';
import { useProperties } from '@/store/properties';

interface Props {
  className?: string
  item: TickerProperty
}

type Status = 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';

export const TickerItem: React.FC<Props> = ({ className, item }) => {
  const { currentProperty, fetchProperty } = useProperties();

  const status = useMemo<Status>(() => {
    if (item.change > 0) {
      return 'POSITIVE';
    }
    if (item.change < 0) {
      return 'NEGATIVE';
    }
    return 'NEUTRAL';
  }, [item]);

  const changeProperty = useCallback(async () => {
    if (currentProperty?.id === item.id) {
      return;
    }
    await fetchProperty(item.id);
  }, [currentProperty, item, fetchProperty]);

  return (
    <div
      className={classNames('flex flex-row py-2 cursor-pointer', className)}
      role="button"
      onClick={changeProperty}
    >
      <div className="pt-0.5">
        {status === 'POSITIVE' && (
          <Sprite
            name="green-arrow-ticker"
            width={15}
            height={14}
          />
        )}
        {status === 'NEGATIVE' && (
          <Sprite
            name="red-arrow-ticker"
            width={15}
            height={14}
          />
        )}
        {status === 'NEUTRAL' && (
          <Sprite
            name="caret-gray-right"
            width={10}
            height={20}
          />
        )}
      </div>
      <div className="flex-1 pl-[3.55px]">
        <h4 className="font-medium text-lg leading-[19px] tracking-[0.78px]">{item.street}</h4>
        <div className="flex flex-row mt-0.5">
          <p
            className={classNames(
              'font-medium text-lg leading-[19px] tracking-[0.78px]',
              {
                'text-green': status === 'POSITIVE',
                'text-red': status === 'NEGATIVE',
              },
            )}
          >
            {status === 'POSITIVE' && (
              <span>+</span>
            )}
            {status === 'NEGATIVE' && (
              <span>-</span>
            )}
            <span>$</span>
            <span>
              {Math.abs(item.change).toLocaleString()}
            </span>
          </p>
          <p className="ml-[23px] font-thin text-lg text-gray-dark leading-[19px] tracking-[0.78px]">
            ${item.reservePrice.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}