import { createSlice } from '@reduxjs/toolkit';

const filters = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: filters,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
