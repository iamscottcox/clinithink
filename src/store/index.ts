import categories from "src/store/categories";
import { configureStore } from "@reduxjs/toolkit";
import items from "src/store/items";
import settings from "src/store/settings";

export const store = configureStore({
  reducer: {
    categories,
    items,
    settings,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
