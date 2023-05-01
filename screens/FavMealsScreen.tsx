import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
//Redux
import { useSelector } from "react-redux";

const FavMealsScreen = () => {
  const favMealsId = useSelector(
    (state: any) => state.favoriteSection.favoriteMealsId //TODO:state type
  );

  const favMeals = MEALS.filter((meal) => favMealsId.includes(meal.id));

  if (favMeals.length === 0) {
    return <Text>You have no favorite meal yet.</Text>;
  }

  return <MealsList items={favMeals} />;
};

export default FavMealsScreen;
