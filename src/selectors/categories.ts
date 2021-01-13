import { createSelector } from "@reduxjs/toolkit";
import { getCategories } from "src/getters/categories";
import { getFavouriteCategories } from "src/getters/settings";

export const getSortedCategories = createSelector(
  [getCategories, getFavouriteCategories],
  (categories, favouriteCategories) => {
    const categoriesSet = new Set(favouriteCategories);

    categories.forEach((category) => categoriesSet.add(category));
    return Array.from(categoriesSet);
  }
);
