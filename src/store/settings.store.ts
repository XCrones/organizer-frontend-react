import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { DefaultTheme } from "styled-components";
import { DarkTheme, LightTheme } from "../ui/themes";

interface SettingsStore {
  typeTheme: DefaultTheme;
  isDarkTheme: boolean;
  toggleTheme: () => void;
}
export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      typeTheme: DarkTheme,
      isDarkTheme: true,
      toggleTheme: () => {
        set({ isDarkTheme: !get().isDarkTheme, typeTheme: !get().isDarkTheme ? DarkTheme : LightTheme });
      },
    }),
    {
      name: "settings",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
