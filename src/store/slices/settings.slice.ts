import { createSlice } from "@reduxjs/toolkit";

interface IStateInitial {
  isNightTheme: boolean;
}

const initialStateValue: IStateInitial = {
  isNightTheme: true,
};

export const Settings = createSlice({
  name: "settings",
  initialState: initialStateValue,
  reducers: {
    toggleTheme(state) {
      state.isNightTheme = !state.isNightTheme;
    },
  },
});

export const { toggleTheme } = Settings.actions;
export default Settings.reducer;
