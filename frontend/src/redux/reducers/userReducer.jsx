import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    username: '',
    firstname: '',
    lastname: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUsername(state, action) {
      state.userData.username = action.payload;
    },
  },
});

export const { updateUsername } = userSlice.actions;
export default userSlice.reducer;