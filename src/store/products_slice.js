import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: {
    toggle_upload_modal: false,
  },
}

export const userSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
      toggle_upload_modal: (state, action) =>{
         state.products.toggle_upload_modal = action.payload;
         console.log('upload product modal', action.payload);
      },
   
  },
})

// Action creators are generated for each case reducer function
export const {toggle_upload_modal } = userSlice.actions

export default userSlice.reducer