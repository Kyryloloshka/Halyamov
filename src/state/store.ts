import { configureStore } from '@reduxjs/toolkit';
import { linksReducer, themeReducer } from './slices';


export const store = configureStore({
  reducer: {
    links: linksReducer,
    theme: themeReducer,
  },
});