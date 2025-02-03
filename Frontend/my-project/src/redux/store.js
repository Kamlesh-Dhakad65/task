import { configureStore } from '@reduxjs/toolkit';
import recordReducer from './recordSlice';

export const store = configureStore({
  reducer: {
    records: recordReducer,
  },
});
