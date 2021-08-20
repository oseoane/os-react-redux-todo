import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    add: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    remove: (state, action) => {
      state.items = [...state.items].filter(
        item => item.id !== action.payload
      );
    },
    removeAll: (state) => {
      state.items = [];
    }
  },
});

export const { add, remove, removeAll } = slice.actions;

export const selectTodos = (state) => state.todos.items;

export default slice.reducer;
