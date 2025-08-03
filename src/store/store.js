import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../features/product";
import { userReducer } from "../features/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});
