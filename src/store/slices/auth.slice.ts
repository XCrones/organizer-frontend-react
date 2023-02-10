import { createAsyncThunk, createSlice, Dispatch } from "@reduxjs/toolkit";

export interface IUserData {}

export interface IAuthUser {
  email: string;
  password: string;
}

interface IStateInitial {
  isAuth: boolean;
  isPending: boolean;
  error: {
    state: boolean;
    value: string;
  };
}

export const authSignIn = createAsyncThunk<
  IUserData,
  IAuthUser,
  { dispatch: Dispatch; rejectValue: string; fullFilled: IUserData }
>("auth/authSignIn", async function (user, { rejectWithValue, fulfillWithValue }) {
  console.log(user.email, user.password);

  const asd = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  await asd();
  return fulfillWithValue({});
});

export const authSignUp = createAsyncThunk<
  IUserData,
  IAuthUser,
  { dispatch: Dispatch; rejectValue: string; fullFilled: IUserData }
>("auth/authSignUp", async function (user, { rejectWithValue, fulfillWithValue }) {
  console.log(user.email, user.password);

  const asd = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  await asd();
  return fulfillWithValue({});
});

const initialStateValue: IStateInitial = {
  isAuth: true,
  isPending: false,
  error: {
    state: false,
    value: "",
  },
};

export const Auth = createSlice({
  name: "auth",
  initialState: initialStateValue,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authSignIn.pending, (state) => {
        state.isPending = true;
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        state.isPending = false;
      })
      .addCase(authSignIn.rejected, (state, action) => {
        state.isPending = false;
      })
      .addCase(authSignUp.pending, (state) => {
        state.isPending = true;
      })
      .addCase(authSignUp.fulfilled, (state, action) => {
        state.isPending = false;
      })
      .addCase(authSignUp.rejected, (state, action) => {
        state.isPending = false;
      });
  },
});

// export const {} = Auth.actions;
export default Auth.reducer;
