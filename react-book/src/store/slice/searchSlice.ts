import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchKeyword: '',
        searchMode: false
    },
    reducers: {
        setSearchKeyword: (state, action) => {
            state.searchKeyword = action.payload;
        },
        setSearchMode: (state, action) => {
            state.searchMode = action.payload;
        }
    }
});

export const {setSearchKeyword, setSearchMode} = searchSlice.actions;
export default searchSlice.reducer;