import { create } from "zustand";
import { IAuth } from "../models/auth.model";

interface IUserData {
  email: string;
  name: string;
  urlAvatar: string | null;
}

interface AuthStore {
  userData: IUserData | undefined;
  isAuth: boolean;
  isPending: boolean;
  error: {
    isError: boolean;
    message: string;
  };
  singIn: ({}: IAuth) => Promise<boolean>;
  singUp: ({}: IAuth) => Promise<boolean>;
  logOut: () => Promise<boolean>;
}

export const useAuthStore = create<AuthStore>()((set, get) => ({
  userData: {
    email: "test@email.com",
    name: "test name",
    urlAvatar: null,
  },
  isAuth: true,
  isPending: false,
  error: {
    isError: false,
    message: "",
  },
  singIn: async () => {
    set({ isPending: true });
    try {
      const asd = (): Promise<void> => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });
      };

      await asd();
      return true;
    } catch (error) {
      return Promise.reject(false);
    } finally {
      set({ isPending: false });
    }
  },
  singUp: async () => {
    set({ isPending: true });
    try {
      const asd = (): Promise<void> => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });
      };

      await asd();
      return true;
    } catch (error) {
      return Promise.reject(false);
    } finally {
      set({ isPending: false });
    }
  },
  logOut: async () => {
    set({ isPending: true });
    try {
      const asd = (): Promise<void> => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });
      };

      await asd();
      return true;
    } catch (error) {
      return Promise.reject(false);
    } finally {
      set({ isPending: false });
    }
  },
}));
