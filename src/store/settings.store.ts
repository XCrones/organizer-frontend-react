import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { DefaultTheme } from "styled-components";
import { DarkTheme, LightTheme } from "../ui/themes";

interface SettingsStore {
  typeTheme: DefaultTheme;
  isNightTheme: boolean;
  toggleTheme: () => void;
}
export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      typeTheme: DarkTheme,
      isNightTheme: true,
      toggleTheme: () => {
        set({ isNightTheme: !get().isNightTheme, typeTheme: !get().isNightTheme ? DarkTheme : LightTheme });
      },
    }),
    {
      name: "settings",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
