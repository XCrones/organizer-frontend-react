import { create } from "zustand";

interface SettingsStore {
  isNightTheme: boolean;
  toggleTheme: () => void;
}

export const useSettingsStore = create<SettingsStore>()((set, get) => ({
  isNightTheme: true,
  toggleTheme: () =>
    set({
      isNightTheme: !get().isNightTheme,
    }),
}));
