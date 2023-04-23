import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import MealsContext from "../store/context/meals-context";
import MealsList from "../components/MealsList";

const FavMealsScreen = () => {
  const mealsCtx = React.useContext(MealsContext);
  const favMeals = mealsCtx.meals.filter((meal) => meal.isFavorite);

  if (favMeals.length === 0) {
    return <Text>You have no favorite meal yet.</Text>;
  }

  return <MealsList items={favMeals} />;
};

export default FavMealsScreen;
