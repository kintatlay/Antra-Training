import { createSlice } from '@reduxjs/toolkit';

export const searchbookSlice = createSlice({
    name: "searchbookSlice",
    initialState: {
        searchResult: [],
        wishlist: [],
        totalItem: 0,
        currentPage: 1,
        keyword: ""
    },
    reducers: {
        loadSearchResult: (state, action) => {
            state.searchResult = action.payload;
        },
        updateWishlist: (state, action) => {
            state.wishlist = action.payload;
        },
        addWishlist: (state, action) => {
            const prev = state.wishlist;
            const bookMap = {};
            const nextWishlist = [action.payload, ...prev];
            nextWishlist.forEach(book => {
                bookMap[book.id] = book;
            });
            state.wishlist = Object.values(bookMap);
            state.wishlist = [action.payload, ...state.wishlist];
        },
        deleteWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
        },
        updateTotalItems: (state, action) => {
            state.totalItem = action.payload;
        },
        updateCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        updateKeyword: (state, action) => {
            state.keyword = action.payload;
        }
    }
})

export const {loadSearchResult, updateWishlist, addWishlist, deleteWishlist, updateTotalItems, updateCurrentPage, updateKeyword } = searchbookSlice.actions;
export default searchbookSlice.reducer;