import React from 'react';
import { Sprite } from './sprite';
import Image from 'next/image';
import { useProperties } from '@/store/properties';

export const TopNav: React.FC = () => {
  const { currentProperty, tickerContents } = useProperties();

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
          <div className="w-[456px] h-full">
            <div className="h-[27px] flex flex-col justify-center h-full">
              <p className="text-center font-extralight text-lg">Own</p>
              <h2 className="text-center font-light text-5xl">{currentProperty?.street}</h2>
              <p className="text-center font-extralight text-lg">{currentProperty?.address}</p>
              <div className="mt-4 w-full flex flex-row justify-center">
                <Sprite
                  name="home-bundle"
                  width={65}
                  height={22}
                />
              </div>
            </div>
          </div>
          <div className="pt-[75px] pr-[69.58px] pb-[74.5px] pl-[69.78px]">
            <Image
              src="/svg/map-pin.svg"
              alt="map-pin"
              width={64}
              height={94}
            />
          </div>
          <div className="w-[456px] h-full ml-[18px]">
            <div className="h-[27px] flex flex-col justify-center h-full">
              <p className="text-center font-extralight text-lg">To</p>
              <h2 className="text-center font-light text-5xl">Start</h2>
              <p className="text-center font-extralight text-lg">Place Deposit</p>
            </div>
          </div>
          <div className="ml-3.5 py-[75px] pr-[77.65px] pl-[78.35px]">
            <Sprite
              name="wishlist"
              width={51}
              height={94}
            />
          </div>
          <div className="w-[456px] h-full ml-[18px]">
            <div className="h-[27px] flex flex-col justify-center h-full">
              <p className="text-center font-extralight text-lg">Market $40,000</p>
              <h2 className="text-center font-light text-5xl">$5,000</h2>
              <p className="text-center font-extralight text-lg">Reserve Price</p>
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
            <h4 className="font-medium text-lg">Outbid</h4>
            <p className="font-medium text-lg text-red">$12</p>
          </div>
          <div className="w-[140px] py-2">
            <h4 className="font-medium text-lg">Active</h4>
            <p className="font-medium text-lg text-gray">24</p>
          </div>
          <div className="w-[91px] py-2">
            <h4 className="font-medium text-lg">Winning</h4>
            <p className="font-medium text-lg text-green">12</p>
          </div>
        </div>
        <div className="flex-1 relative flex flex-row">
          <div className="absolute w-full h-full top-0 left-0 bg-white opacity-[0.5] z-[1]" />
          <div className="relative w-full pl-[73px] pr-[115px] py-2 flex flex-row z-[2]">
            <div className="flex flex-row py-2">
              <div>
                <Sprite
                  name="green-arrow-ticker"
                  width={15}
                  height={14}
                />
              </div>
              <div className="flex-1 pl-[3.55px]">
                <h4 className="font-medium text-lg">14 Flood St.</h4>
                <div className="flex flex-row">
                  <p className="font-medium text-lg text-green">+$100</p>
                  <p className="ml-[23px] font-thin text-lg text-gray-dark">$5,000</p>
                </div>
              </div>
            </div>
            <div className="ml-[263px] flex flex-row py-2">
              <div>
                <Sprite
                  name="red-arrow-ticker"
                  width={15}
                  height={14}
                />
              </div>
              <div className="flex-1 pl-[3.55px]">
                <h4 className="font-medium text-lg">14 Washington Ave.</h4>
                <div className="flex flex-row">
                  <p className="font-medium text-lg text-red">-$100</p>
                  <p className="ml-[23px] font-thin text-lg text-gray-dark">$5,200</p>
                </div>
              </div>
            </div>
            <div className="ml-[284px] flex flex-row py-2">
              <div>
                <Sprite
                  name="caret-gray-right"
                  width={10}
                  height={20}
                />
              </div>
              <div className="flex-1 pl-[3.55px]">
                <h4 className="font-medium text-lg">289 Hempstead St.</h4>
                <div className="flex flex-row">
                  <p className="font-medium text-lg">$</p>
                  <p className="ml-[23px] font-thin text-lg text-gray-dark">$5,000</p>
                </div>
              </div>
            </div>
            <div className="ml-[293px] relative flex flex-row py-2">
              <div>
                <Sprite
                  name="green-arrow-ticker"
                  width={15}
                  height={14}
                />
              </div>
              <div className="flex-1 pl-[3.55px]">
                <h4 className="font-medium text-lg">57 West Ave G.</h4>
                <div className="flex flex-row">
                  <p className="font-medium text-lg">$</p>
                  <p className="ml-[23px] font-thin text-lg text-gray-dark">$5,200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-row">
          <div className="w-[159px] px-6 py-2">
            <h4 className="font-medium text-lg">Winning</h4>
            <p className="font-medium text-lg text-green">$100,000</p>
          </div>
          <div className="w-[135px] py-2">
            <h4 className="font-medium text-lg">Active</h4>
            <p className="font-medium text-lg text-gray">$100,000</p>
          </div>
          <div className="w-[108px] py-2">
            <h4 className="font-medium text-lg">Outbid</h4>
            <p className="font-medium text-lg text-red">$100,000</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
