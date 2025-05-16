import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existing = state.cartItems.find(i => i.id === item.id);

      if (existing) {
        existing.count += 1;
      } else {
        state.cartItems.push({ ...item, count: 1 });
      }

      state.totalQuantity += 1;
    },

    incrementQuantity(state, action) {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        item.count += 1;
        state.totalQuantity += 1;
      }
    },

    decrementQuantity(state, action) {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        if (item.count > 1) {
          item.count -= 1;
          state.totalQuantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
          state.totalQuantity -= 1;
        }
      }
    },

    removeFromCart(state, action) {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        state.totalQuantity -= item.count;
        state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
      }
    },

    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
