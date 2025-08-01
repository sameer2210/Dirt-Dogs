import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../features/product"; // index.js exports reducer

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
