import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { IEvent, IJoinEvent } from "../../models/calendar.models";

interface IStateInitial {
  pending: {
    getAll: boolean;
    join: boolean;
  };
  events: IEvent[];
}

const initialStateValue: IStateInitial = {
  pending: {
    getAll: false,
    join: false,
  },
  events: [],
};

export const fetchEvents = createAsyncThunk<IEvent[], undefined, { fullFilled: IEvent[]; rejectValue: void }>(
  "calendar/fetchEvents",
  async function (_, { fulfillWithValue, rejectWithValue }) {
    const { data } = await axios.get("calendar", {
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

export const joinEvent = createAsyncThunk<IEvent, IJoinEvent, { fullFilled: IEvent; rejectValue: void }>(
  "calendar/joinNew",
  async function (event, { fulfillWithValue, rejectWithValue }) {
    const { data } = await axios.post<IEvent>("calendar", {
      ...event,
    });

    if (!!data) {
      fulfillWithValue(data);
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
        // console.log(action.payload);
      })
      .addCase(fetchEvents.rejected, (state) => {
        state.pending.getAll = false;
      })
      //
      .addCase(joinEvent.pending, (state) => {
        state.pending.join = true;
      })
      .addCase(joinEvent.fulfilled, (state, action) => {
        state.pending.join = false;
        // console.log(typeof action.payload);
      })
      .addCase(joinEvent.rejected, (state) => {
        state.pending.join = false;
      });
  },
});

// export const { } = Calenadar.actions;
export default Calenadar.reducer;
