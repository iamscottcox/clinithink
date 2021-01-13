/* eslint-disable */
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { fetchData } from "src/actions/data";

export const itemsAdapter = createEntityAdapter<API.Item>({
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const itemsSlice = createSlice({
  name: "items",
  initialState: itemsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      itemsAdapter.setAll(state, action.payload.items);
    });
  },
});

export default itemsSlice.reducer;
