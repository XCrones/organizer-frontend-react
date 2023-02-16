import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { IEvent, IJoinEvent } from "../../models/calendar.models";

interface IStateInitial {
  pending: {
    getAll: boolean;
    join: boolean;
    patch: boolean;
  };
  events: IEvent[];
}

const initialStateValue: IStateInitial = {
  pending: {
    getAll: false,
    join: false,
    patch: false,
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

export const joinEvent = createAsyncThunk<IEvent, IJoinEvent, { fullFilled: IEvent; rejectValue: void }>(
  "calendar/joinNew",
  async function (event, { fulfillWithValue, rejectWithValue }) {
    const { data } = await axios.post<IEvent>("calendar", {
      ...event,
    });

    if (!!data) {
      return fulfillWithValue(data);
    }

    return rejectWithValue();
  }
);

export const patchEvent = createAsyncThunk<IEvent, IEvent, { fullFilled: IEvent; rejectValue: void }>(
  "calendar/patchEvent",
  async function (event, { fulfillWithValue, rejectWithValue }) {
    const { data } = await axios.patch(`calendar/${event.id}`, event);
    const [count, item] = data;
    const [payload] = item;

    if (!!payload) {
      return fulfillWithValue(payload);
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
      })
      //
      .addCase(joinEvent.pending, (state) => {
        state.pending.join = true;
      })
      .addCase(joinEvent.fulfilled, (state, action) => {
        state.pending.join = false;
        state.events = [...state.events, action.payload];
      })
      .addCase(joinEvent.rejected, (state) => {
        state.pending.join = false;
      })
      //
      .addCase(patchEvent.pending, (state) => {
        state.pending.patch = true;
      })
      .addCase(patchEvent.fulfilled, (state, action) => {
        state.pending.patch = false;
        if (!!action.payload) {
          const event = state.events.find((event) => event.id === action.payload.id);
          if (!!event) {
            Object.assign(event, action.payload);
          }
        }
      })
      .addCase(patchEvent.rejected, (state) => {
        state.pending.patch = false;
      });
  },
});

// export const { } = Calenadar.actions;
export default Calenadar.reducer;
