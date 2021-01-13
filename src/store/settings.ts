import { createReducer } from "@reduxjs/toolkit";
import { fetchData } from "src/actions/data";

interface SettingsState {
  selectedCategory: API.Category | null;
  favouriteCategories: API.Category[];
}

const initialState: SettingsState = {
  selectedCategory: null,
  favouriteCategories: [],
};

export const settings = createReducer<SettingsState>(
  initialState,
  (builder) => {
    builder.addCase(fetchData.fulfilled, (state, { payload }) => {
      state.favouriteCategories = payload.favourite_categories;
      return state;
    });
  }
);

export default settings;
