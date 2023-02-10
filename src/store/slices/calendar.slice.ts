import { createSlice } from "@reduxjs/toolkit";

interface IStateInitial {}

const initialStateValue: IStateInitial = {};

export const Calenadar = createSlice({
  name: "calendar",
  initialState: initialStateValue,
  reducers: {},
});

// export const {} = Calenadar.actions;
export default Calenadar.reducer;
