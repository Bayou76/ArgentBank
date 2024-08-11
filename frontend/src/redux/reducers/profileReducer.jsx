import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '', 
  lastName: '', 
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
