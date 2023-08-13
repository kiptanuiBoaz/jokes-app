import { configureStore } from '@reduxjs/toolkit';
import paginationSlice from '../redux/paginatinSlice';
import jokeSlice from '../redux/jokeSlice';
import themeSlice from '../redux/themeSlice';


const store = configureStore({
  reducer: {
    pagination: paginationSlice,
    joke: jokeSlice,
    theme: themeSlice,
  },
});

export default store;

//persist state
store.subscribe(() => {
  localStorage.setItem("pagination", JSON.stringify(store.getState().pagination));
  localStorage.setItem("theme", JSON.stringify(store.getState().theme));
  localStorage.setItem("joke", JSON.stringify(store.getState().joke));
});