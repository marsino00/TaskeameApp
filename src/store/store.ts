import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    // Agrega otros slices o reducers aquí si es necesario
  },
});
