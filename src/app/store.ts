import { configureStore } from '@reduxjs/toolkit';
import isLogged from '../features/global/isLogged';
export default configureStore({
  reducer: {
    isLogged: isLogged
  },
})