import { AxiosError } from "axios";
import { create } from "zustand";
import { Axios } from "../config/axios/methods";
import { ROUTES } from "../config/routes/routes";
import { IPending, ITodo, ITodoJoin } from "../models";

interface IStateInitial {
  endPoint: string;
  pending: IPending;
  data: ITodo[];
  getAllData: () => void;
  joinData: (newData: ITodoJoin) => void;
  patchData: (editData: ITodo) => void;
  deleteData: (idData: number) => void;
}

export const useTodosStore = create<IStateInitial>()((set, get) => ({
  endPoint: ROUTES.TODOS.PATH,
  pending: {
    fetchAll: false,
    fetchOne: false,
  },
  data: [],
  getAllData: async () => {
    set({ pending: { ...get().pending, fetchAll: true } });
    try {
      const data = await Axios.get<ITodo[]>({ path: get().endPoint });
      if (!!data) {
        set({ data: data });
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      throw err;
    } finally {
      set({ pending: { ...get().pending, fetchAll: false } });
    }
  },
  joinData: async (newTodo) => {
    set({ pending: { ...get().pending, fetchOne: true } });
    try {
      const data = await Axios.post<ITodo, ITodoJoin>({ path: get().endPoint, data: newTodo });

      if (!!data) {
        set({
          data: [...get().data, data],
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
  patchData: async (editData) => {
    set({ pending: { ...get().pending, fetchOne: true } });
    try {
      const data = await Axios.patch<ITodo, ITodo>({ path: get().endPoint, data: editData });

      if (!!data) {
        set({
          data: get().data.map((item) => (item.id === data.id ? { ...data } : item)),
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
  deleteData: async (idData) => {
    set({ pending: { ...get().pending, fetchOne: true } });
    try {
      const data = await Axios.delete<ITodo>({ path: `${get().endPoint}/${idData}` });

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
