import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "./favorite-slice";

const store = configureStore({
  reducer: {
    favoriteSection: favoriteReducer,
  },
});

export default store;
