import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import emptySlice from "./slices/empty.slice";
import todosSlice from "./slices/todos.slice";

const rootReducer = combineReducers({
  empty: emptySlice,
  todos: todosSlice,
  audh: authSlice,
});

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const store = createStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
