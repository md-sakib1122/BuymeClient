import { configureStore } from '@reduxjs/toolkit'
import user_Detail_reducer from './user_Details_Slice'
export const store = configureStore({
  reducer:{
     user: user_Detail_reducer,
  },
});

export default store;