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
  toggleMapMode: () => void
}

interface State extends PropertyState, PropertyActions {}

export const useProperties = create<State>((set, get) => ({
  currentProperty: undefined,
  tickerContents: {
    properties: [],
  },
  mapMode: 'street',
  toggleMapMode: () => {
    const { mapMode } = get();
    if (mapMode === 'street') {
      set({
        mapMode: 'satellite',
      });
    } else if (mapMode === 'satellite') {
      set({
        mapMode: 'street',
      });
    }
  },
  fetchProperty: async (id) => {
    console.log({ id });
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
