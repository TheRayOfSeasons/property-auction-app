'use client';

import { ForSaleSign } from '@/components/for-sale-sign';
import { TopNav } from '@/components/top-nav';
import { useProperties } from '@/store/properties';
import { useEffect, useMemo } from 'react';

export default function Home() {
  const { currentProperty, fetchProperty, fetchTickerContents, mapMode } = useProperties();

  useEffect(() => {
    fetchProperty(1);
    fetchTickerContents();
  }, [fetchProperty, fetchTickerContents]);

  const imageUrl = useMemo(() => {
    switch(mapMode) {
      case 'satellite':
        return currentProperty?.satelliteView || '/satellite-view-1.png';
      case 'street':
        return currentProperty?.streetView || '/street-view-1.jpg';
    }
  }, [currentProperty, mapMode]);

  return (
    <div
      className="mx-auto max-w-[2560px] w-full h-[1440px] overflow-hidden"
      style={{
        backgroundImage: `url('${imageUrl}')`
      }}
    >
      <TopNav />
      <main className="relative">
        <div className="absolute top-[344px] left-[1070px]">
          <ForSaleSign />
        </div>
        <div className="absolute top-[464px] left-[325px]">
          <h4 className="absolute top-[45.5px] left-[121.72px] font-medium text-blue-light text-lg tracking-[2px]">
            Neighbor?
          </h4>
        </div>
        <div className="absolute top-[295.64px] left-[-208.4px] w-[248.56px] h-[248.72px] rounded-full bg-white" />
        <div className="absolute top-[296.02px] right-[-207.49px] w-[248.56px] h-[248.56px] rounded-full bg-white" />
      </main>
    </div>
  );
}
