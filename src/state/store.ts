import { configureStore } from '@reduxjs/toolkit';
import { linksReducer } from './slices';


export const store = configureStore({
  reducer: {
    links: linksReducer,
  },
});