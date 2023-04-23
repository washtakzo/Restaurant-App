import { createContext, useReducer } from "react";
import { MEALS } from "../data/dummy-data";

type State = {
  meals: Meal[];
  toggleFavoriteMeal: (mealId: string) => void;
};

type Action = {
  type: string;
  payload: string;
};

type ProviderProps = {
  children: React.ReactNode;
};

const defaultContextValues = {
  meals: MEALS,
  toggleFavoriteMeal: (mealId: string) => {},
};

const MealsContext = createContext(defaultContextValues);

const ACTIONS = {
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
};

const reducer = (state: State, action: Action) => {
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
      return state;
  }
};

export const MealsContextProvider = ({ children }: ProviderProps) => {
  const initialReducerValues = {
    meals: MEALS,
    toggleFavoriteMeal: (mealId: string) => {
      dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: mealId });
    },
  };

  const [state, dispatch] = useReducer(reducer, initialReducerValues);

  return (
    <MealsContext.Provider value={state}>{children}</MealsContext.Provider>
  );
};

export default MealsContext;
