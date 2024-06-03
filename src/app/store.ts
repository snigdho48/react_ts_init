import { configureStore, Tuple } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import loadingSlice from './Slice/loadingSlice';

const rootReducer = {
  loading: loadingSlice,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: () => new Tuple(thunk),
});

export default store;
