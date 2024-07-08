import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 0,
  isReady: false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initState(state, action: PayloadAction<number>) {
      if (state.isReady) {
        return;
      }
      state.count = action.payload;
      state.isReady = true;
    },
    increment(state) {
      state.count++;
    },
    decrement(state) {
      if (state.count === 0) {
        return;
      }
      state.count--;
    },
    reset(state, action: PayloadAction<number>) {
      if (action.payload < 0) {
        action.payload = 0;
      }
      state.count = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, initState } = counterSlice.actions;

export default counterSlice.reducer;
