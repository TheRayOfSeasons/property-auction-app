import React from 'react';
import { Sprite } from './sprite';
import Image from 'next/image';
import { useProperties } from '@/store/properties';
import { TickerItem } from './ticker-item';

export const TopNav: React.FC = () => {
  const { currentProperty, tickerContents, toggleMapMode } = useProperties();

  return (
    <header className="w-full">
      <nav className="relative w-full h-[240px]">
        <div className="absolute w-full h-full z-[1] bg-white opacity-[0.85]" />
        <div className="relative w-full h-full z-[2] pl-[172px] pr-[151px] flex flex-row">
          <div className="h-full pt-[73px] pr-[68.31px] pb-[73.15px] pl-[67.79px]">
            <Sprite
              name="list-view"
              width={72}
              height={94}
            />
          </div>
          <div className="relative w-[456px] pt-[66.25px] h-full">
            <div className="absolute top-[66.25px] w-full">
              <p className="text-center font-extralight text-lg tracking-[2px] leading-[27px]">Own</p>
            </div>
            <div className="absolute top-[87px] w-full">
              <h2 className="text-center font-light text-[46px] tracking-[2px] leading-[69px] whitespace-nowrap">{currentProperty?.street}</h2>
            </div>
            <div className="absolute top-[146.25px] w-full">
              <p className="text-center font-extralight text-lg tracking-[2px] leading-[27px]">{currentProperty?.address}</p>
            </div>
            <div className="absolute top-[182px] w-full flex flex-row justify-center">
              <Sprite
                name="home-bundle"
                width={65}
                height={22}
              />
            </div>
          </div>
          <div className="pt-[75px] pr-[69.58px] pb-[74.5px] pl-[69.78px]">
            <button
              type="button"
              onClick={toggleMapMode}
            >
              <Image
                src="/svg/map-pin.svg"
                alt="map-pin"
                width={64}
                height={94}
              />
            </button>
          </div>
          <div className="relative w-[456px] h-full ml-[18px]">
            <div className="absolute top-[66.25px] w-full">
              <p className="text-center font-extralight text-lg tracking-[2px] leading-[27px]">To</p>
            </div>
            <div className="absolute top-[86.75px] w-full">
              <h2 className="text-center font-light text-[46px] tracking-[2px] leading-[69px]">Start</h2>
            </div>
            <div className="absolute top-[146.25px] w-full">
              <p className="text-center font-extralight text-lg tracking-[2px] leading-[27px]">Place Deposit</p>
            </div>
          </div>
          <div className="ml-3.5 py-[75px] pr-[77.65px] pl-[78.35px]">
            <Sprite
              name="wishlist"
              width={51}
              height={94}
            />
          </div>
          <div className="relative w-[456px] h-full ml-[18px]">
            <div className="absolute top-[66.25px] w-full">
              <p className="text-center font-extralight text-lg tracking-[2px] leading-[27px]">Market ${currentProperty?.marketValue?.toLocaleString()}</p>
            </div>
            <div className="absolute top-[86.75px] w-full">
              <h2 className="text-center font-light text-[46px] tracking-[2px] leading-[69px]">${currentProperty?.reservePrice?.toLocaleString()}</h2>
            </div>
            <div className="absolute top-[146.25px] w-full">
              <p className="text-center font-extralight text-lg tracking-[2px] leading-[27px]">Reserve Price</p>
            </div>
          </div>
          <div className="pt-[64px] pb-[76px] px-[72px]">
            <Image
              src="/svg/sort.svg"
              alt="sort"
              width={90}
              height={100}
            />
          </div>
        </div>
      </nav>
      <nav className="relative w-full h-[60px] flex flex-row">
        <div className="bg-white flex flex-row">
          <div className="w-[171px] px-6 py-2">
            <h4 className="font-medium text-lg leading-[19px] tracking-[0.78px]">Outbid</h4>
            <p className="font-medium text-lg text-red leading-[19px] tracking-[0.78px] mt-0.5">{currentProperty?.bid.outbid}</p>
          </div>
          <div className="w-[140px] py-2">
            <h4 className="font-medium text-lg leading-[19px] tracking-[0.78px]">Active</h4>
            <p className="font-medium text-lg text-gray leading-[19px] tracking-[0.78px] mt-0.5">{currentProperty?.bid.active}</p>
          </div>
          <div className="w-[91px] py-2">
            <h4 className="font-medium text-lg leading-[19px] tracking-[0.78px]">Winning</h4>
            <p className="font-medium text-lg text-green leading-[19px] tracking-[0.78px] mt-0.5">{currentProperty?.bid.winning}</p>
          </div>
        </div>
        <div className="flex-1 relative flex flex-row">
          <div className="absolute w-full h-full top-0 left-0 bg-white opacity-[0.5] z-[1]" />
          <div className="relative w-full pl-[73px] flex flex-row z-[2]">
            {tickerContents?.properties[0] && (
              <TickerItem
                item={tickerContents.properties[0]}
              />
            )}
            {tickerContents?.properties[1] && (
              <TickerItem
                className="ml-[263px]"
                item={tickerContents.properties[1]}
              />
            )}
            {tickerContents?.properties[2] && (
              <TickerItem
                className="ml-[284px]"
                item={tickerContents.properties[2]}
              />
            )}
            {tickerContents?.properties[3] && (
              <TickerItem
                className="ml-[293px]"
                item={tickerContents.properties[3]}
              />
            )}
          </div>
        </div>
        <div className="bg-white flex flex-row">
          <div className="w-[159px] px-6 py-2">
            <h4 className="font-medium text-lg leading-[19px] tracking-[0.78px]">Winning</h4>
            <p className="font-medium text-lg text-green leading-[19px] tracking-[0.78px] mt-0.5">${currentProperty?.bidAmount.winning.toLocaleString()}</p>
          </div>
          <div className="w-[135px] py-2">
            <h4 className="font-medium text-lg leading-[19px] tracking-[0.78px]">Active</h4>
            <p className="font-medium text-lg text-gray leading-[19px] tracking-[0.78px] mt-0.5">${currentProperty?.bidAmount.active.toLocaleString()}</p>
          </div>
          <div className="w-[108px] py-2">
            <h4 className="font-medium text-lg leading-[19px] tracking-[0.78px]">Outbid</h4>
            <p className="font-medium text-lg text-red leading-[19px] tracking-[0.78px] mt-0.5">${currentProperty?.bidAmount.outbid.toLocaleString()}</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
