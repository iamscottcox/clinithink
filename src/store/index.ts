import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import categories from "src/store/categories";
import items from "src/store/items";
import settings from "src/store/settings";

export const store = configureStore({
  reducer: {
    categories,
    items,
    settings,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>;
