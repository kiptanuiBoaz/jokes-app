import { createSlice } from '@reduxjs/toolkit';
import { ThemeInterface } from "../types/types";

const initialState: ThemeInterface = {
    theme: "light",
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        TOGGLE_THEME: (state,action) => {
            state.theme = action.payload.theme;
        },
    }
});


//make action available for all components
export const { TOGGLE_THEME } = themeSlice.actions;
//reducer to store
export default themeSlice.reducer;
//reference to paginaton state
export const selectTheme = (state: { theme: ThemeInterface }) => state.theme.theme;