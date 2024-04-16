import React from 'react';
import { Sprite } from './sprite';
import { useProperties } from '@/store/properties';

export const ForSaleSign: React.FC = () => {
  const { currentProperty } = useProperties();

  return (
    <div className="relative">
      <div className="absolute top-[2px] left-[33px] w-[2px] h-[369px] border-[4px] border-blue z-[2]" />
      <div className="absolute top-[33.08px] left-[0.12px] w-[380px] h-[2px] border-[4px] border-blue z-[2]" />
      <div className="absolute top-[2px] left-[33px] w-[347px] h-[33px] z-[1]">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-[0.66] z-[1]" />
        <div className="absolute top-0 left-[1px] w-[346px] h-[30px] z-[2]">
          <h4 className="font-light text-center text-[23px]">Public Auction</h4>
        </div>
        <div className="absolute top-[9px] left-[20px] z-[2]">
          <Sprite
            name="home"
            width={18}
            height={17}
          />
        </div>
      </div>
      <div className="absolute top-[50.14px] left-[50.18px] w-[330.5px] h-[190.34px] border-[4.42px] border-blue border-center rounded-[17.66px] overflow-hidden">
        <div className="absolute top-0 left-0 bg-white opacity-[0.86] w-full h-full z-[1]" />
        <div className="relative z-[2]">
          <div className="absolute top-[20.05px] w-full">
            <h4 className="text-center text-[21px] font-light tracking-[2.33px]">
              Market Value ${currentProperty?.marketValue?.toLocaleString()}
            </h4>
          </div>
          <div className="absolute top-[76.31px] w-full">
            <h3 className="font-extralight text-center text-[22px] tracking-[1.83px] leading-[33px]">
              {currentProperty?.street}
            </h3>
          </div>
          <div className="absolute top-[109.31px] w-full">
            <h3 className="font-extralight text-center text-[15px] tracking-[1.83px] leading-[18px]">
              {currentProperty?.address}
            </h3>
          </div>
          <div className="absolute top-[145.33px] w-full">
            <h5 className="text-[14.4px] text-center tracking-[1.6px] font-extralight">
              Reserve Bid ${currentProperty?.reservePrice?.toLocaleString()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
