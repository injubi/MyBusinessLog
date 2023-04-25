import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DayState = {
  targetDay: Date;
  today: Date;
};

export type targetDayPayload = {
  targetDay: Date;
};

const initialState: DayState = {
  targetDay: new Date(),
  today: new Date(),
};

const daySlice = createSlice({
  name: "day",
  initialState,
  reducers: {
    targetDayAction(state: DayState, action: PayloadAction<targetDayPayload>) {
      state.targetDay = action.payload.targetDay;
    },
  },
});

const { reducer, actions } = daySlice;
export const { targetDayAction } = actions;
export default reducer;
