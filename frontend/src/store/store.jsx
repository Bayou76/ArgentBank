import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/reducers/authReducer'; 
import profileReducer from '../redux/reducers/profileReducer'; 
import userReducer from '../redux/reducers/userReducer'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    user: userReducer,
  },
});

export default store;