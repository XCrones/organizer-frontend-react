import { AxiosError } from "axios";
import { create } from "zustand";
import { ITodo } from "../models/todos.models";
import axios from "../axios";
import { IPending } from "../models/pending.model";

interface TodosStore {
  todos: ITodo[];
  pending: IPending;
  fetchTodos: () => void;
  fetchOneTodo: (id: number) => void;
  joinTodo: (newTodo: ITodo) => void;
  patchTodo: (todoItem: ITodo) => void;
  deleteTodo: (id: number) => void;
}

export const useTodosStore = create<TodosStore>()((set, get) => ({
  pending: {
    fetchAll: false,
    fetchOne: false,
  },
  todos: [],
  fetchTodos: async () => {
    set({ pending: { ...get().pending, fetchAll: true } });
    try {
      const { data } = await axios.get<ITodo[]>("todos");
      if (!!data) {
        set({ todos: data });
      } else {
        throw "error get all todos";
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      throw err;
    } finally {
      set({ pending: { ...get().pending, fetchAll: false } });
    }
  },
  fetchOneTodo: async (id) => {
    set({ pending: { ...get().pending, fetchOne: true } });
    try {
      const { data } = await axios.get<ITodo>(`todos/${id}`);
      if (!!data) {
        return data;
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      throw err;
    } finally {
      set({ pending: { ...get().pending, fetchOne: false } });
    }
  },
  joinTodo: async (newTodo) => {
    set({ pending: { ...get().pending, fetchOne: true } });
    try {
      const { data } = await axios.post<ITodo>("todos", newTodo);
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
  patchTodo: async (todoItem) => {
    set({ pending: { ...get().pending, fetchOne: true } });
    try {
      const { data } = await axios.patch(`todos/${todoItem.id}`, todoItem);
      const [count, item] = data;
      const payload = item[0] as ITodo;

      if (!!payload) {
        if (!!item) {
          set({
            todos: get().todos.map((item) => (item.id === payload.id ? { ...payload } : item)),
          });
        }
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
      const { data } = await axios.delete<ITodo>(`todos/${id}`);
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
