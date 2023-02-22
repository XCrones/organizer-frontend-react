import { AxiosError } from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IAuthSignIn, IAuthSignUp } from "../models";
import axios from "../config/axios";

interface IUserData {
  email: string;
  name: string;
  urlAvatar: string;
  token: string;
}

interface ISignErr {
  isError: boolean;
  message: string;
}

interface AuthStore {
  userData: IUserData | null;
  isPending: boolean;
  singIn: (userData: IAuthSignIn) => Promise<ISignErr>;
  singUp: (userData: IAuthSignUp) => Promise<ISignErr>;
  logOut: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      userData: null,
      isPending: false,
      singIn: async (userData) => {
        set({ isPending: true });
        try {
          const { data } = await axios.post<IUserData>("auth/signin", userData, {
            headers: {
              "Conent-type": "Application/json",
            },
          });

          if (!!data) {
            set({ userData: { ...JSON.parse(JSON.stringify(data)) } });
          }

          return Promise.resolve({ isError: false, message: "" });
        } catch (error) {
          const err = error as AxiosError<{ statusCode: number; message: string; error: string }>;
          if (!!err.response?.data) {
            return { isError: true, message: err.response.data.message };
          }
          return Promise.reject(err.message);
        } finally {
          set({ isPending: false });
        }
      },
      singUp: async (userData) => {
        set({ isPending: true });
        try {
          const { data } = await axios.post<IUserData>("auth/signup", userData, {
            headers: {
              "Conent-type": "Application/json",
            },
          });

          if (!!data) {
            set({ userData: { ...JSON.parse(JSON.stringify(data)) } });
          }

          return Promise.resolve({ isError: false, message: "" });
        } catch (error) {
          const err = error as AxiosError<{ statusCode: number; message: string; error: string }>;
          if (!!err.response?.data) {
            return { isError: true, message: err.response.data.message };
          }
          return Promise.reject(err.message);
        } finally {
          set({ isPending: false });
        }
      },
      logOut: async () => {
        set({ isPending: true });
        try {
          set({
            userData: null,
          });
        } catch (error) {
          return Promise.reject(error);
        } finally {
          set({ isPending: false });
        }
      },
    }),
    {
      name: "organizer",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        userData: state.userData,
      }),
    }
  )
);
