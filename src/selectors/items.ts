import { AppState } from "src/store";
import { itemsAdapter } from "src/store/items";

export const { selectAll: getItems } = itemsAdapter.getSelectors<AppState>(
  (state) => state.items
);
