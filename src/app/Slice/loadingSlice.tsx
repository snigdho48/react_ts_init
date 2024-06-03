interface LoadingState {
  isLoading: boolean;
}

import { createSlice } from '@reduxjs/toolkit';

interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading: (state: LoadingState) => {
      state.isLoading = true;
    },
    finishLoading: (state: LoadingState) => {
      state.isLoading = false;
    },
  },
});

export const { startLoading, finishLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
