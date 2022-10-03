import { configureStore } from "@reduxjs/toolkit";

import { todosReducer, initialState } from "./reducers";

export const store = configureStore({
  reducer: todosReducer,
  preloadedState: initialState,
});
