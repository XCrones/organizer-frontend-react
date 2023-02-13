import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { IEvent } from "../../models/calendar.models";

interface IStateInitial {
  pending: {
    getAll: boolean;
  };
  events: IEvent[];
}

const initialStateValue: IStateInitial = {
  pending: {
    getAll: false,
  },
  events: [],
};

export const fetchEvents = createAsyncThunk<IEvent[], undefined, { fullFilled: IEvent[]; rejectValue: void }>(
  "calendar/fetchEvents",
  async function (_, { fulfillWithValue, rejectWithValue }) {
    const { data } = await axios.get<IEvent[]>("calendar", {
      data: {
        uid: 1,
      },
    });
    if (!!data) {
      return fulfillWithValue(data);
    }
    return rejectWithValue();
  }
);

export const Calenadar = createSlice({
  name: "calendar",
  initialState: initialStateValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.pending.getAll = true;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.pending.getAll = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state) => {
        state.pending.getAll = false;
      });
  },
});

// export const { } = Calenadar.actions;
export default Calenadar.reducer;
