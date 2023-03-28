import { AxiosError } from "axios";
import { create } from "zustand";
import { Axios } from "../config/axios/methods";
import { ROUTES } from "../config/routes/routes";
import { IPending, ITodo, ITodoJoin } from "../models/Interfaces";
import { IBaseResponse } from "../models/Interfaces";

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
  endPoint: ROUTES.TODO.PATH,
  pending: {
    fetchAll: false,
    fetchOne: false,
  },
  data: [],
  getAllData: async () => {
    set({ pending: { ...get().pending, fetchAll: true } });
    try {
      const response = await Axios.get<IBaseResponse<ITodo[]>>({ path: get().endPoint });

      if (!!response?.data) {
        set({ data: response.data });
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
      const response = await Axios.post<IBaseResponse<ITodo>, ITodoJoin>({ path: get().endPoint, data: newTodo });

      if (!!response?.data) {
        set({
          data: [...get().data, response.data],
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
      const response = await Axios.patch<IBaseResponse<ITodo>, ITodo>({
        path: `${get().endPoint}/${editData.id}`,
        data: editData,
      });

      if (!!response?.data) {
        set({
          data: get().data.map((item) => (item.id === response.data.id ? { ...response.data } : item)),
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
      const response = await Axios.delete<IBaseResponse<boolean>>({ path: `${get().endPoint}/${idData}` });

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
