import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {  PaginationPayloadInterface, PaginationStateInterface } from "../types/types";

const initialState:PaginationStateInterface = {
    pagination: {
        page: 1,
        limit: 10,
    }
};

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        NAVIGATE_PAGE: (state, action: PayloadAction<PaginationPayloadInterface>)=>{
            const { page, limit } = action.payload;
            state.pagination.limit = limit;

            //navigate to page of jokes
            if (page === "next") {
                state.pagination.page += 1;
            }else if(page === "prev") {
                state.pagination.page -= 1;
            }else{
                state.pagination.page = page;
            }
        }
    }

});

//make action available for all components
export const {NAVIGATE_PAGE} = paginationSlice.actions;
//reducer to store
export default paginationSlice.reducer;
//reference to paginaton state
export const selectPagination = (state: PaginationStateInterface) => state.pagination;