import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
     cart: cartReducer,
  },
});

export default store;
