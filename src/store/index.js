import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui';
import cartSlice from './cart';

const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});

export const uiActions = uiSlice.actions;
export const cartActions = cartSlice.actions;

export default store;
