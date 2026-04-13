import { createSlice } from '@reduxjs/toolkit';

const recalcTotals = (items) => ({
  totalQuantity: items.reduce((sum, item) => sum + item.quantity, 0),
  totalAmount: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
});

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existing = state.items.find((item) => item.id === newItem.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      Object.assign(state, recalcTotals(state.items));
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      Object.assign(state, recalcTotals(state.items));
    },

    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (!item) return;

      if (type === 'increment') {
        item.quantity += 1;
      } else if (type === 'decrement') {
        if (item.quantity <= 1) {
          // Auto-remove when quantity reaches 0
          state.items = state.items.filter((i) => i.id !== id);
        } else {
          item.quantity -= 1;
        }
      }

      Object.assign(state, recalcTotals(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
