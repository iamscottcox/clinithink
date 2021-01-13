import { AppState } from "src/store";
import { createSelector } from "@reduxjs/toolkit";
import { getSelectedCategory } from "src/getters/settings";
import { itemsAdapter } from "src/store/items";

export const { selectAll: getItems } = itemsAdapter.getSelectors<AppState>(
  (state) => state.items
);

export const getFilteredItems = createSelector(
  [getItems, getSelectedCategory],
  (items, selectedCategory) =>
    selectedCategory
      ? items.filter(({ category }) => category === selectedCategory)
      : items
);
