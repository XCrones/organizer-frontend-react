import { Dispatch, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface IStateInitial {}

const initialStateValue: IStateInitial = {};

export const foo = createAsyncThunk<
  undefined,
  undefined,
  { dispatch: Dispatch; state: RootState; fullFilled: undefined; rejectValue: null }
>("empty/foo", async function (item, { dispatch, getState, fulfillWithValue, rejectWithValue }) {
  return fulfillWithValue(undefined);
});

export const EmptySlice = createSlice({
  name: "empty",
  initialState: initialStateValue,
  reducers: {},
});

// export const {  } = EmptySlice.actions;
export default EmptySlice.reducer;
