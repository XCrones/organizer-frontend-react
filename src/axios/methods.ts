import axios from ".";
import { useAuthStore } from "../store/auth.store";

const contentTypeJSON = {
  "Content-type": "application/json",
};

export interface IAxios<T> {
  path: string;
  data?: T | null;
}

export const Axios = {
  getAll: async <T>(meta: IAxios<T>): Promise<T | undefined> => {
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
  getOne: async <T>(meta: IAxios<T>): Promise<T | undefined> => {
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
  post: async <T>(meta: IAxios<T>): Promise<T | undefined> => {
    try {
      const token = useAuthStore.getState().userData?.token;
      const { data } = await axios.post<T>(meta.path, meta.data, {
        headers: { Authorization: `bearer ${token}`, ...contentTypeJSON },
      });

      return data;
    } catch (error) {
      throw error;
    }
  },
  patch: async <T>(meta: IAxios<T>): Promise<T | undefined> => {
    try {
      const token = useAuthStore.getState().userData?.token;
      const { data } = await axios.patch<T>(meta.path, meta.data, {
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
