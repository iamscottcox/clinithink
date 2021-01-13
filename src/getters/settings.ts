import { AppState } from "src/store";
import { settingsSlice } from "src/store/settings";

export const getSelectedCategory = (state: AppState) =>
  state.settings.selectedCategory;
