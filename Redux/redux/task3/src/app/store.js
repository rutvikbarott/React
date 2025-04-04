// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../features/itemsSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer
  }
});
