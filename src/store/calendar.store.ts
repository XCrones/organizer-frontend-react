import { AxiosError } from "axios";
import { create } from "zustand";
import { Axios } from "../config/axios/methods";
import { ROUTES } from "../config/routes/routes";
import { IBaseResponse, IEvent, IJoinEvent, IPending } from "../models";

interface IStateInitial {
  endPoint: string;
  pending: IPending;
  data: IEvent[];
  getAllData: () => void;
  joinData: (newData: IJoinEvent) => void;
  patchData: (editData: IEvent) => void;
  deleteData: (idData: number) => void;
}

export const useCalendarStore = create<IStateInitial>()((set, get) => ({
  endPoint: ROUTES.CALENDAR.PATH,
  pending: {
    fetchAll: false,
    fetchOne: false,
  },
  data: [],
  getAllData: async () => {
    set({ pending: { ...get().pending, fetchAll: true } });
    try {
      const response = await Axios.get<IBaseResponse<IEvent[]>>({ path: get().endPoint });

      if (!!response?.data) {
        set({ data: response.data });
      } else {
        throw "error get all events";
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      throw err;
    } finally {
      set({ pending: { ...get().pending, fetchAll: false } });
    }
  },

  joinData: async (newData) => {
    set({ pending: { ...get().pending, fetchOne: true } });
    try {
      const response = await Axios.post<IBaseResponse<IEvent>, IJoinEvent>({ path: get().endPoint, data: newData });

      if (!!response?.data) {
        set({ data: [...get().data, response.data] });
      } else {
        throw "error get all events";
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      throw err;
    } finally {
      set({ pending: { ...get().pending, fetchOne: false } });
    }
  },

  patchData: async (editData) => {
    set({ pending: { ...get().pending, fetchOne: true } });
    try {
      const response = await Axios.patch<IBaseResponse<IEvent>, IEvent>({
        path: `${get().endPoint}/${editData.id}`,
        data: editData,
      });

      if (!!response?.data) {
        set({
          data: get().data.map((item) => (item.id === response.data.id ? { ...response.data } : item)),
        });
      } else {
        throw "error get all events";
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      throw err;
    } finally {
      set({ pending: { ...get().pending, fetchOne: false } });
    }
  },

  deleteData: async (idData) => {
    set({ pending: { ...get().pending, fetchOne: true } });
    try {
      const response = await Axios.delete<IBaseResponse<IEvent>>({ path: `${get().endPoint}/${idData}` });

      if (response?.data) {
        set({
          data: get().data.filter((item) => item.id !== idData),
        });
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
