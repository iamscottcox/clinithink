import { AppState } from "src/store";

export const getSelectedCategory = (state: AppState) =>
  state.settings.selectedCategory;

export const getFavouriteCategories = (state: AppState) =>
  state.settings.favouriteCategories;
