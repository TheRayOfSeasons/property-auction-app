import React from 'react';
import { Sprite } from './sprite';

export const TopNav: React.FC = () => {
  return (
    <header className="relative w-full h-[240px]">
      <div className="absolute w-full h-full z-[1] bg-white opacity-[0.85]" />
      <div className="relative w-full h-full z-[2] pl-[172px] pr-[151px] flex flex-row">
        <div className="h-full pt-[73px] pr-[68.31px] pb-[73.15px] pl-[67.79px]">
          <Sprite name="list-view" />
        </div>
        <div className="w-[456px] h-full">
          <div className="h-[27px] flex flex-col justify-center">
            <p className="text-center font-extralight text-lg">Own</p>
            <h2 className="text-center font-light text-5xl">14 Flood St.</h2>
            <p className="text-center font-extralight text-lg">New Orleans, LA 70122</p>
          </div>
        </div>
      </div>
    </header>
  );
}
