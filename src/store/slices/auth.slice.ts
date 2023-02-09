import { createSlice } from "@reduxjs/toolkit";

interface IStateInitial {
  isAuth: boolean;
}

const initialStateValue: IStateInitial = {
  isAuth: false,
};

export const Auth = createSlice({
  name: "auth",
  initialState: initialStateValue,
  reducers: {},
});

// export const {} = Auth.actions;
export default Auth.reducer;
