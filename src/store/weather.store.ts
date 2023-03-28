import { IBaseResponse } from "./../models/IBaseResponse";
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
  joinCityByName: (cityName: string) => Promise<void>;
  joinCityByGeo: (reqData: IReqWeatherByGeo) => Promise<void>;
  dropCity: (idCIty: number) => Promise<void>;
  cityMove: (meta: IMoveItem) => Promise<void>;
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
      const response = await Axios.get<IBaseResponse<ICityWeather[]>>({ path: `${get().endPoint}/cities` });
      if (!!response.data) {
        set({ data: { ...get().data, cities: response.data } });
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      throw err;
    } finally {
      set({ pending: { ...get().pending, fetchAll: false } });
    }
  },
  joinCityByName: async (cityName) => {
    set({ pending: { ...get().pending, fetchOne: true } });
    try {
      const reqData: IReqWeatherByName = {
        cityName,
      };

      const response = await Axios.post<IBaseResponse<ICityWeather>, IReqWeatherByName>({
        path: `${get().endPoint}/city-name`,
        data: reqData,
      });

      if (!!response?.data) {
        set({ data: { ...get().data, cities: [...get().data.cities, response.data] } });
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
      const response = await Axios.post<IBaseResponse<ICityWeather>, IReqWeatherByGeo>({
        path: `${get().endPoint}/city-geo`,
        data: reqData,
      });

      if (!!response?.data) {
        set({ data: { ...get().data, cities: [...get().data.cities, response.data] } });
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
      const response = await Axios.get<IBaseResponse<IWeatherForecast>>({
        path: `${get().endPoint}/${id}`,
      });

      if (!!response.data) {
        set({ data: { ...get().data, forecast: response.data } });
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
      const data = await Axios.delete<IBaseResponse<boolean>>({ path: `${get().endPoint}/${idCity}` });

      if (data?.data) {
        set({ data: { ...get().data, cities: get().data.cities.filter((item) => item.id != idCity) } });
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      throw err;
    } finally {
      set({ pending: { ...get().pending, fetchOne: false } });
    }
  },
  cityMove: async (meta) => {
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
