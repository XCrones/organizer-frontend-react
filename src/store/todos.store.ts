import { AxiosError } from "axios";
import { create } from "zustand";
import { ITodo } from "../models/todos.models";
import { IPending } from "../models/pending.model";
import { Axios, IAxios } from "../axios/methods";

interface TodosStore {
  todos: ITodo[];
  pending: IPending;
  fetchAllTodos: () => void;
  joinTodo: (newTodo: ITodo) => void;
  patchTodo: (editTodo: ITodo) => void;
  deleteTodo: (id: number) => void;
}

export const useTodosStore = create<TodosStore>()((set, get) => ({
  pending: {
    fetchAll: false,
    fetchOne: false,
  },
  todos: [],
  fetchAllTodos: async () => {
    set({ pending: { ...get().pending, fetchAll: true } });
    try {
      const metaAxios: IAxios<ITodo[]> = {
        path: "todos",
        data: null,
      };
      const data = await Axios.get<ITodo[]>(metaAxios);
      if (!!data) {
        set({ todos: data });
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      throw err;
    } finally {
      set({ pending: { ...get().pending, fetchAll: false } });
    }
  },
  joinTodo: async (newTodo) => {
    set({ pending: { ...get().pending, fetchOne: true } });
    try {
      const metaAxios: IAxios<ITodo> = {
        path: "todos",
        data: newTodo,
      };
      const data = await Axios.post<ITodo>(metaAxios);
      if (!!data) {
        set({
          todos: [...get().todos, data],
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
  patchTodo: async (editTodo) => {
    set({ pending: { ...get().pending, fetchOne: true } });
    try {
      const metaAxios: IAxios<ITodo> = {
        path: "todos",
        data: editTodo,
      };
      const data = await Axios.patch<ITodo>(metaAxios);

      if (!!data) {
        set({
          todos: get().todos.map((item) => (item.id === data.id ? { ...data } : item)),
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
  deleteTodo: async (id) => {
    set({ pending: { ...get().pending, fetchOne: true } });
    try {
      const metaAxios: IAxios<ITodo> = {
        path: `todos/${id}`,
        data: null,
      };
      const data = await Axios.delete<ITodo>(metaAxios);
      if (!!data) {
        set({
          todos: get().todos.filter((item) => item.id !== data.id),
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
