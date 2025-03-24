// src/features/itemsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const { id, newText } = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);
      if (itemIndex >= 0) {
        state.items[itemIndex].text = newText;
      }
    }
  }
});

export const { addItem, removeItem, updateItem } = itemsSlice.actions;
export default itemsSlice.reducer;
