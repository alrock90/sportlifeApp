import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import fieldReducer from '../features/field/fieldSlice';

export const store = configureStore({
  reducer: {
    field: fieldReducer,
  },
});
