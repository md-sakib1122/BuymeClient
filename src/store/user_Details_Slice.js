import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
}

export const counterSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    setUserDetails: (state,action) => {
      
      state.user = action.payload;
    },
   
  },
})

// Action creators are generated for each case reducer function
export const {setUserDetails } = counterSlice.actions

export default counterSlice.reducer