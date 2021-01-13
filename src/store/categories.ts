import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "src/actions/data";

type CategoriesState = API.Category[];

const initialState: CategoriesState = [];

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, { payload }) => {
      const categoriesSet: Set<API.Category> = new Set();
      payload.items.forEach(({ category }) => categoriesSet.add(category));
      return Array.from(categoriesSet);
    });
  },
});

export default categoriesSlice.reducer;
