import { createContext, useReducer } from "react";
import { MEALS } from "../data/dummy-data";

const defaultContextValues = {
  meals: MEALS,
  toggleFavoriteMeal: (meal) => {},
};

const MealsContext = createContext(defaultContextValues);

const ACTIONS = {
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAVORITE:
      const mealId = action.payload;
      const currentMeals = [...state.meals];
      const newMeals = currentMeals.map((meal) => {
        if (meal.id === mealId) {
          return { ...meal, isFavorite: !meal.isFavorite };
        }
        return meal;
      });
      return { ...state, meals: newMeals };

    default:
      break;
  }
};

export const MealsContextProvider = ({ children }) => {
  const initialReducerValues = {
    meals: MEALS,
  };

  const [state, dispatch] = useReducer(reducer, initialReducerValues);

  const toggleFavoriteMeal = (mealId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: mealId });
  };

  return (
    <MealsContext.Provider
      value={{
        ...state,
        toggleFavoriteMeal,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export default MealsContext;
