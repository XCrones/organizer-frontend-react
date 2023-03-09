import { AxiosError } from "axios";
import { create } from "zustand";
import { Axios } from "../config/axios/methods";
import { ROUTES } from "../config/routes/routes";
import { ICityWeather, IPending, IReqWeatherByName, IReqWeatherByGeo, IWeatherForecast, IMoveItem } from "../models";

interface IData {
  forecast: IWeatherForecast | null;
  cities: ICityWeather[];
}

interface IStateInitial {
  endPoint: string;
  pending: IPending;
  data: IData;
  getCities: () => Promise<void>;
  getForecast: (id: number) => Promise<void>;
  joinCityByName: (nameCity: string) => Promise<void>;
  joinCityByGeo: (reqData: IReqWeatherByGeo) => Promise<void>;
  dropCity: (idCIty: number) => Promise<void>;
  cityMove: (meta: IMoveItem) => void;
}

export const useWeatherStore = create<IStateInitial>()((set, get) => ({
  endPoint: ROUTES.WEATHER.PATH,
  pending: {
    fetchAll: false,
    fetchOne: false,
  },
  data: {
    forecast: null,
    cities: [],
  },
  getCities: async () => {
    set({ pending: { ...get().pending, fetchAll: true } });
    try {
      const data = await Axios.get<ICityWeather[]>({ path: `${get().endPoint}` });
      if (!!data) {
        set({ data: { ...get().data, cities: data } });
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      throw err;
    } finally {
      set({ pending: { ...get().pending, fetchAll: false } });
    }
  },
  joinCityByName: async (nameCity) => {
    set({ pending: { ...get().pending, fetchOne: true } });
    try {
      const reqData: IReqWeatherByName = {
        city: nameCity,
      };

      const data = await Axios.post<ICityWeather[], IReqWeatherByName>({
        path: `${get().endPoint}/city-name`,
        data: reqData,
      });
      if (!!data) {
        set({ data: { ...get().data, cities: data } });
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      throw err;
    } finally {
      set({ pending: { ...get().pending, fetchOne: false } });
    }
  },
  joinCityByGeo: async (reqData) => {
    set({ pending: { ...get().pending, fetchOne: true } });
    try {
      const data = await Axios.post<ICityWeather[], IReqWeatherByGeo>({
        path: `${get().endPoint}/city-geo`,
        data: reqData,
      });
      if (!!data) {
        set({ data: { ...get().data, cities: data } });
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      throw err;
    } finally {
      set({ pending: { ...get().pending, fetchOne: false } });
    }
  },
  getForecast: async (id) => {
    set({ pending: { ...get().pending, fetchOne: true } });
    try {
      const data = await Axios.get<IWeatherForecast>({
        path: `${get().endPoint}/${id}`,
      });
      if (!!data) {
        set({ data: { ...get().data, forecast: data } });
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      throw err;
    } finally {
      set({ pending: { ...get().pending, fetchOne: false } });
    }
  },
  dropCity: async (idCity) => {
    set({ pending: { ...get().pending, fetchOne: true } });
    try {
      const data = await Axios.delete<ICityWeather[]>({ path: `${get().endPoint}/${idCity}` });

      if (!!data) {
        set({ data: { ...get().data, cities: data } });
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      throw err;
    } finally {
      set({ pending: { ...get().pending, fetchOne: false } });
    }
  },
  cityMove: (meta) => {
    try {
      const arrCities = JSON.parse(JSON.stringify(get().data.cities));

      if (!!arrCities) {
        const firstElemIdx = get().data.cities.findIndex((city) => city.id === meta.id);
        const firstElem = get().data.cities.find((city) => city.id === meta.id);
        const secondElem = get().data.cities[meta.index];

        if (firstElemIdx >= 0 && !!firstElem && !!secondElem) {
          arrCities[firstElemIdx] = secondElem;
          arrCities[meta.index] = firstElem;
          set({ data: { ...get().data, cities: arrCities } });
          // ! update back
        }
      }
    } catch (error) {
      throw error;
    }
  },
}));
