import { RootState } from "..";
import axios from "../../axios";
import { IJoinTodo, ITodo } from "./../../models/todos.models";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IStateInitial {
  todos: ITodo[];
  pending: {
    getAll: boolean;
    getOne: boolean;
    addNew: boolean;
    delete: boolean;
    change: boolean;
  };
}

export const fetchTodos = createAsyncThunk<ITodo[], undefined, { fullFilled: ITodo[]; rejectValue: void }>(
  "todos/fetchTodos",
  async function (_, { fulfillWithValue, rejectWithValue }) {
    const { data } = await axios.get<ITodo[]>("todos");
    if (!!data) {
      return fulfillWithValue(data);
    }
    return rejectWithValue();
  }
);

export const fetchOneTodo = createAsyncThunk<ITodo, number, { fullFilled: ITodo; rejectValue: void }>(
  "todos/fetchOneTodo",
  async function (id, { fulfillWithValue, rejectWithValue }) {
    // const { data } = await axios.get<ITodo>(`todos/${id}`);
    // if (!!data) {
    //   return fulfillWithValue(data);
    // }
    return rejectWithValue();
  }
);

export const joinTodo = createAsyncThunk<ITodo, IJoinTodo, { fullFilled: ITodo; rejectValue: void }>(
  "todos/addTodo",
  async function (newTodo, { fulfillWithValue, rejectWithValue }) {
    // const { data } = await axios.post<ITodo>("todos", newTodo);

    // if (!!data) {
    //   return fulfillWithValue(data);
    // }
    return rejectWithValue();
  }
);

export const editTodo = createAsyncThunk<ITodo, ITodo, { fullFilled: ITodo; rejectValue: void }>(
  "todos/editTodo",
  async function (todoItem, { fulfillWithValue, rejectWithValue }) {
    const { data } = await axios.patch(`todos/${todoItem.id}`, todoItem);
    const [count, item] = data;
    const [payload] = item;

    if (!!payload) {
      return fulfillWithValue(payload);
    }
    return rejectWithValue();
  }
);

const initialStateValue: IStateInitial = {
  pending: {
    getAll: false,
    getOne: false,
    addNew: false,
    delete: false,
    change: false,
  },
  todos: [],
};

export const Todos = createSlice({
  name: "todos",
  initialState: initialStateValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.pending.getAll = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.pending.getAll = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.pending.getAll = false;
        // state.todos = [...state.todos];
      })
      //
      .addCase(fetchOneTodo.pending, (state) => {
        state.pending.getOne = true;
      })
      .addCase(fetchOneTodo.fulfilled, (state, action) => {
        state.pending.getOne = false;
        // console.log(action.payload);
      })
      .addCase(fetchOneTodo.rejected, (state) => {
        state.pending.getOne = false;
      })
      //
      .addCase(joinTodo.pending, (state) => {
        state.pending.addNew = true;
      })
      .addCase(joinTodo.fulfilled, (state, action) => {
        state.pending.addNew = false;
        console.log(action.payload);
        // state.todos.push(action.payload);
      })
      .addCase(joinTodo.rejected, (state) => {
        state.pending.addNew = false;
        // state.todos = [...state.todos];
      })
      //
      .addCase(editTodo.pending, (state) => {
        state.pending.change = true;
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        state.pending.change = false;
        if (!!action.payload) {
          const item = state.todos.find((item) => item.id === action.payload.id);
          if (!!item) {
            Object.assign(item, action.payload);
          }
        }
      })
      .addCase(editTodo.rejected, (state) => {
        state.pending.change = false;
      });
  },
});

export default Todos.reducer;
