import axios from ".";
import { useAuthStore } from "../../store";

const contentTypeJSON = {
  "Content-type": "application/json",
};

export interface IAxios<T> {
  path: string;
  data?: T | null;
}

export const Axios = {
  get: async <T>(meta: IAxios<T>): Promise<T | undefined> => {
    try {
      const token = useAuthStore.getState().userData?.token;
      const { data } = await axios.get<T>(meta.path, {
        headers: { Authorization: `bearer ${token}` },
      });
      return data;
    } catch (error) {
      throw error;
    }
  },
  post: async <R, D>(meta: IAxios<D>): Promise<R | undefined> => {
    try {
      const token = useAuthStore.getState().userData?.token;
      const { data } = await axios.post<R>(meta.path, meta.data, {
        headers: { Authorization: `bearer ${token}`, ...contentTypeJSON },
      });

      return data;
    } catch (error) {
      throw error;
    }
  },
  patch: async <R, D>(meta: IAxios<D>): Promise<R | undefined> => {
    try {
      const token = useAuthStore.getState().userData?.token;
      const { data } = await axios.patch<R>(meta.path, meta.data, {
        headers: { Authorization: `bearer ${token}`, ...contentTypeJSON },
      });

      return data;
    } catch (error) {
      throw error;
    }
  },
  delete: async <T>(meta: IAxios<T>): Promise<T | undefined> => {
    try {
      const token = useAuthStore.getState().userData?.token;
      const { data } = await axios.delete<T>(meta.path, {
        headers: { Authorization: `bearer ${token}` },
      });

      return data;
    } catch (error) {
      throw error;
    }
  },
};
