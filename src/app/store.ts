import { configureStore } from '@reduxjs/toolkit';
import paginationSlice from '../redux/paginatinSlice';
import jokeSlice from '../redux/jokeSlice';


const store = configureStore({
  reducer: {
    pagination:paginationSlice,
    joke:jokeSlice,
  },
});

export default store;

//persist pagination state
store.subscribe(() => {
  localStorage.setItem("pagination", JSON.stringify(store.getState().pagination));
});