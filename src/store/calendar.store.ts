import { AxiosError } from "axios";
import { create } from "zustand";
import { Axios } from "../axios/methods";
import { IEvent, IJoinEvent } from "../models/calendar.models";
import { IPending } from "../models/pending.model";
import { ROUTER_LINKS } from "../router-links";

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
  endPoint: ROUTER_LINKS.calendar.path,
  pending: {
    fetchAll: false,
    fetchOne: false,
  },
  data: [],
  getAllData: async () => {
    set({ pending: { ...get().pending, fetchAll: true } });
    try {
      const data = await Axios.get<IEvent[]>({ path: get().endPoint });

      if (!!data) {
        set({ data: data });
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
      const data = await Axios.post<IEvent, IJoinEvent>({ path: get().endPoint, data: newData });

      if (!!data) {
        set({ data: [...get().data, data] });
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
      const data = await Axios.patch<IEvent, IEvent>({ path: get().endPoint, data: editData });

      if (!!data) {
        set({
          data: get().data.map((item) => (item.id === data.id ? { ...data } : item)),
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
      const data = await Axios.delete<IEvent>({ path: `${get().endPoint}/${idData}` });
      if (!!data) {
        set({
          data: get().data.filter((item) => item.id !== data.id),
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
