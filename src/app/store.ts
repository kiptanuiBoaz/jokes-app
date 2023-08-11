import { configureStore } from '@reduxjs/toolkit';
import paginationSlice from '../redux/paginatinSlice';


const store = configureStore({
  reducer: {
    pagination:paginationSlice,
  },
});

export default store;

//persist pagination state
store.subscribe(() => {
  localStorage.setItem("pagination", JSON.stringify(store.getState().pagination));
});