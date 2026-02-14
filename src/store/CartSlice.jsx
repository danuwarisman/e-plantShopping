import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
        });
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
        state.totalQuantity++;
      }
      
       state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity, 0
      );
    },
    
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter(item => item.id !== id);
        
        state.totalAmount = state.items.reduce(
          (total, item) => total + item.price * item.quantity, 0
        );
      }
    },
    
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        if (type === 'increment') {
          existingItem.quantity++;
          state.totalQuantity++;
        } else if (type === 'decrement' && existingItem.quantity > 1) {
          existingItem.quantity--;
          state.totalQuantity--;
        }
        
        state.totalAmount = state.items.reduce(
          (total, item) => total + item.price * item.quantity, 0
        );
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;