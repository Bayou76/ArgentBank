import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/reducers/authReducer'; 
import profileReducer from '../redux/reducers/profileReducer'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
  },
});

export default store;