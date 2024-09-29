import { configureStore } from '@reduxjs/toolkit'
import user_Detail_reducer from './user_Details_Slice'
import products_reducer from './products_slice';
export const store = configureStore({
  reducer:{
     user: user_Detail_reducer,
     products:products_reducer,
  },
});

export default store;