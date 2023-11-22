import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        username: 'Carsten',
        searchKeyword: '',
        searchLocation: '',
        searchDistance: 0,
        searchSort: 'Datum'
    },
    reducers: {
        search(state, action: PayloadAction<{
                searchKeyword: string;
                searchLocation: string;
                searchDistance: number;
            }>){
            state.searchKeyword = action.payload.searchKeyword;
            state.searchLocation = action.payload.searchLocation;
            state.searchDistance = action.payload.searchDistance;
        },
        sort(state, action: PayloadAction<string>){
            state.searchSort = action.payload;
        }
    },
});

export default appSlice.reducer;
export const { search, sort } = appSlice.actions;