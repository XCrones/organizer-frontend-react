import { AxiosError } from "axios";
import { create } from "zustand";
import { Axios } from "../config/axios/methods";
import { ROUTES } from "../config/routes/routes";
import { ICityWeather, IPending, IReqForecastWeather, IWeatherForecast } from "../models";

interface IData {
  forecast: IWeatherForecast | null;
  cities: ICityWeather[];
}

interface IStateInitial {
  endPoint: string;
  pending: IPending;
  data: IData;
  getCities: () => void;
  getForecast: (nameCity: string) => void;
  joinCity: (nameCity: string) => void;
  dropCity: (idCIty: number) => void;
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
      const data = await Axios.get<ICityWeather[]>({ path: `${get().endPoint}/cities` });
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
  getForecast: async (nameCity) => {
    set({ pending: { ...get().pending, fetchOne: true } });
    try {
      const req: IReqForecastWeather = {
        city: nameCity,
      };
      const data = await Axios.post<IWeatherForecast, IReqForecastWeather>({
        path: `${get().endPoint}/forecast`,
        data: req,
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
  joinCity: (nameCity) => {},
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
}));
