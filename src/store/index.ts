import { combineReducers, configureStore } from "@reduxjs/toolkit";
import emptySlice from "./slices/empty.slice";

const rootReducer = combineReducers({
  empty: emptySlice,
});

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const store = createStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
