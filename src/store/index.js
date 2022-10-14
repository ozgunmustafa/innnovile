import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/auth';
import recordsReducer from '../slices/records';
import technologyReducer from '../slices/technology';

const store = configureStore({
  reducer: {
    auth: authReducer,
    records: recordsReducer,
    technologies: technologyReducer,
  },
});

export default store;
