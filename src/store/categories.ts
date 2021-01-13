import { createReducer } from "@reduxjs/toolkit";
import { fetchData } from "src/actions/data";

type CategoriesState = API.Category[];

const initialState: CategoriesState = [];

export const categories = createReducer<CategoriesState>(
  initialState,
  (builder) => {
    builder.addCase(fetchData.fulfilled, (state, { payload }) => {
      const categoriesSet: Set<API.Category> = new Set();
      payload.items.forEach(({ category }) => categoriesSet.add(category));
      return Array.from(categoriesSet);
    });
  }
);

export default categories;
