import { AxiosError } from "axios";
import { create } from "zustand";
import axios from "../axios";
import { IEvent, IJoinEvent } from "../models/calendar.models";
import { IPending } from "../models/pending.model";

interface CalendarStore {
  pending: IPending;
  events: IEvent[];
  fetchEvents: () => void;
  joinEvent: (event: IJoinEvent) => void;
  patchEvent: (event: IEvent) => void;
  deleteEvent: (id: number) => void;
}

export const useCalendarStore = create<CalendarStore>()((set, get) => ({
  pending: {
    fetchAll: false,
    fetchOne: false,
  },
  events: [],
  fetchEvents: async () => {
    set({ pending: { fetchAll: true, fetchOne: false } });
    try {
      const { data } = await axios.get<IEvent[]>("calendar");

      if (!!data) {
        set({ events: data });
      } else {
        throw "error get all events";
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      throw err;
    } finally {
      set({ pending: { fetchAll: false, fetchOne: false } });
    }
  },

  joinEvent: async (event) => {
    set({ pending: { fetchAll: true, fetchOne: false } });
    try {
      const { data } = await axios.post<IEvent>("calendar", event);

      if (!!data) {
        set({ events: [...get().events, data] });
      } else {
        throw "error get all events";
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      throw err;
    } finally {
      set({ pending: { fetchAll: false, fetchOne: false } });
    }
  },

  patchEvent: async (event) => {
    set({ pending: { fetchAll: true, fetchOne: false } });
    try {
      const { data } = await axios.patch(`calendar/${event.id}`, event);
      const [count, item] = data;
      const [payload] = item;

      if (!!payload) {
        if (!!item) {
          set({
            events: get().events.map((item) => (item.id === payload.id ? { ...payload } : item)),
          });
        }
      } else {
        throw "error get all events";
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      throw err;
    } finally {
      set({ pending: { fetchAll: false, fetchOne: false } });
    }
  },

  deleteEvent: async (id) => {
    set({ pending: { fetchAll: false, fetchOne: true } });
    try {
      const { data } = await axios.delete<IEvent>(`calendar/${id}`);
      if (!!data) {
        set({
          events: get().events.filter((item) => item.id !== data.id),
        });
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      throw err;
    } finally {
      set({ pending: { fetchAll: false, fetchOne: false } });
    }
  },
}));
