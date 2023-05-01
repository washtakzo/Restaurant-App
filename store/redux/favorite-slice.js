import { createSlice, CreateSliceOptions } from "@reduxjs/toolkit";

const initialState = {
  favoriteMealsId: [],
};

const favoriteSlice = createSlice({
  name: "favorite_slice",
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.favoriteMealsId.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favoriteMealsId = state.favoriteMealsId.filter(
        (mealId) => mealId !== action.payload
      );
    },
    toggleMeal(state, action) {
      if (state.favoriteMealsId.includes(action.payload)) {
        state.favoriteMealsId = state.favoriteMealsId.filter(
          (mealId) => mealId !== action.payload
        );
      } else {
        state.favoriteMealsId.push(action.payload);
      }
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
