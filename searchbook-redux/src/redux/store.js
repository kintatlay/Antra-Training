import { configureStore } from '@reduxjs/toolkit';
import searchbookReducer from "./slices/searchbookSlice";
export const store = configureStore({
    reducer: {
        searchbookSlice:searchbookReducer
    }
})