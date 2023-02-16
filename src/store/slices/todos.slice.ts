import axios from "../../axios";
import { IJoinTodo, ITodo } from "./../../models/todos.models";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
    const { data } = await axios.get<ITodo>(`todos/${id}`);
    if (!!data) {
      return fulfillWithValue(data);
    }
    return rejectWithValue();
  }
);

export const joinTodo = createAsyncThunk<ITodo, IJoinTodo, { fullFilled: ITodo; rejectValue: void }>(
  "todos/addTodo",
  async function (newTodo, { fulfillWithValue, rejectWithValue }) {
    const { data } = await axios.post<ITodo>("todos", newTodo);

    if (!!data) {
      return fulfillWithValue(data);
    }
    return rejectWithValue();
  }
);

export const patchTodo = createAsyncThunk<ITodo, ITodo, { fullFilled: ITodo; rejectValue: void }>(
  "todos/patchTodo",
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

export const deleteTodo = createAsyncThunk<ITodo, number, { fullFilled: ITodo; rejectValue: void }>(
  "todos/deleteTodo",
  async function (id, { fulfillWithValue, rejectWithValue }) {
    const { data } = await axios.delete<ITodo>(`todos/${id}`);

    if (!!data) {
      return fulfillWithValue(data);
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
      })
      //
      .addCase(fetchOneTodo.pending, (state) => {
        state.pending.getOne = true;
      })
      .addCase(fetchOneTodo.fulfilled, (state, action) => {
        state.pending.getOne = false;
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
        state.todos.push(action.payload);
      })
      .addCase(joinTodo.rejected, (state) => {
        state.pending.addNew = false;
      })
      //
      .addCase(patchTodo.pending, (state) => {
        state.pending.change = true;
      })
      .addCase(patchTodo.fulfilled, (state, action) => {
        state.pending.change = false;
        if (!!action.payload) {
          const item = state.todos.find((item) => item.id === action.payload.id);
          if (!!item) {
            Object.assign(item, action.payload);
          }
        }
      })
      .addCase(patchTodo.rejected, (state) => {
        state.pending.change = false;
      })
      //
      .addCase(deleteTodo.pending, (state) => {
        state.pending.delete = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.pending.delete = false;
        const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
        if (todoIndex >= 0) {
          state.todos.splice(todoIndex, 1);
        }
      })
      .addCase(deleteTodo.rejected, (state) => {
        state.pending.delete = false;
      });
  },
});

export default Todos.reducer;
