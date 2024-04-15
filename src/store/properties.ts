import { create } from 'zustand';
import ky from 'ky';
import type { PropertyMainResponse } from '@/app/api/property/[id]/route';
import type { TickerResponse } from '@/app/api/ticker/route';

type MapMode = 'street' | 'satellite';

interface PropertyState {
  currentProperty?: PropertyMainResponse
  tickerContents?: TickerResponse
  mapMode: MapMode
}

interface PropertyActions {
  fetchProperty: (id: number) => Promise<void>
  fetchTickerContents: () => Promise<void>
  setMapMode: (mapMode: MapMode) => void
}

interface State extends PropertyState, PropertyActions {}

export const useProperties = create<State>((set) => ({
  currentProperty: undefined,
  tickerContents: undefined,
  mapMode: 'street',
  setMapMode: (mapMode) => {
    set({
      mapMode,
    });
  },
  fetchProperty: async (id) => {
    const response = await ky.get(`/api/property/${id}`);
    const data = await response.json<PropertyMainResponse>();
    set({
      currentProperty: data,
    });
  },
  fetchTickerContents: async () => {
    const response = await ky.get(`/api/ticker`, {
      searchParams: {
        count: 4,
      },
    });
    const data = await response.json<TickerResponse>();
    set({
      tickerContents: data,
    })
  },
}));
