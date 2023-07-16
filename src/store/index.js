import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import languageSlice from "./reducers/languageSlice";

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    languageSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: false,
});
