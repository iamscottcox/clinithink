import { getSelectedCategory } from "src/getters/settings";
import { setSelectedCategory } from "src/actions/settings";
import { store } from "src/store";

export const handleCategoryButtonClick = (category: API.Category) => {
  const { dispatch, getState } = store;
  const state = getState();
  const selectedCategory = getSelectedCategory(state);

  if (category === selectedCategory) {
    dispatch(setSelectedCategory(null));
  } else {
    dispatch(setSelectedCategory(category));
  }
};
