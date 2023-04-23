import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import Meal from "../components/Meal";
import MealsContext from "../store/context/meals-context";
import MealsList from "../components/MealsList";

type MealsOverviewRoute = {
  params: { categoryId: string };
  key: string;
  name: string;
  path?: string | undefined;
};

type Props = {
  route: MealsOverviewRoute;
  navigation: Navigation;
};

//TODO:essayer de récupérer le type officiel de route
//NOTE:tout comme navigation il est possible de récupérer route dans les component définie en Screen
//ou bien en utilisant useRoute
//Pour des soucies de typage et pour pouvoir indiquer que categoryId existe dans les params - le custom type MealsOverviewRoute à été fait.

const MealsOverviewScreen = ({ route, navigation }: Props) => {
  const route2 = useRoute<MealsOverviewRoute>();
  const mealsCtx = React.useContext(MealsContext);

  const categoryId = route2.params.categoryId;

  React.useLayoutEffect(() => {
    const currentCategory = CATEGORIES.find(
      (category) => category.id === categoryId
    );

    const categoryTitle = currentCategory?.title;

    navigation.setOptions({ title: categoryTitle });
  }, [navigation, categoryId]);

  const displayedMeals = mealsCtx.meals.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
