import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import calendarSlice from "./slices/calendar.slice";
import emptySlice from "./slices/empty.slice";
import settingsSlice from "./slices/settings.slice";
import todosSlice from "./slices/todos.slice";

const rootReducer = combineReducers({
  empty: emptySlice,
  todos: todosSlice,
  audh: authSlice,
  calendar: calendarSlice,
  settings: settingsSlice,
});

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const store = createStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
