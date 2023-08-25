import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import languageSlice from "./reducers/languageSlice";
import scrollingSlice from "./reducers/scrollingSlice";
export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    languageSlice,
    scrollingSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  // devTools: false,
});
