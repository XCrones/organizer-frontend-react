import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface SettingsStore {
  isNightTheme: boolean;
  toggleTheme: () => void;
}
export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set, get) => ({
      isNightTheme: true,
      toggleTheme: () =>
        set({
          isNightTheme: !get().isNightTheme,
        }),
    }),
    {
      name: "settings",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
