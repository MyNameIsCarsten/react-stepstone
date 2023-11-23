import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  currentFilters: {
    [filterKeyword: string]: string;
  };
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    currentFilters: {},
  } as FilterState,
  reducers: {
    addFilter(state, action: PayloadAction<{
        filterKeyword: string;
        filterValue: string;
        }>) {
      const { filterKeyword, filterValue } = action.payload;

      if (state.currentFilters[filterKeyword] !== filterValue) {
        state.currentFilters[filterKeyword] = filterValue;
      } 
    },
    resetFilter(state){
        state.currentFilters = {};
    }
  }
});

export const { addFilter, resetFilter } = filterSlice.actions;

export default filterSlice.reducer;
