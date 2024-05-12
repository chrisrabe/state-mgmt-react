import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    }
  }
});

export const { setCount } = counterSlice.actions;
export default counterSlice.reducer;