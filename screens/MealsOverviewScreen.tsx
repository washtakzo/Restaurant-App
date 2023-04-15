import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";

type MealsOverviewRoute = {
  params: { categoryId: string };
  key: string;
  name: string;
  path?: string | undefined;
};

type Props = {
  route: MealsOverviewRoute;
};

//TODO:essayer de récupérer le type officiel de route
//NOTE:tout comme navigation il est possible de récupérer route dans les component définie en Screen
//ou bien en utilisant useRoute
//Pour des soucies de typage et pour pouvoir indiquer que categoryId existe dans les params - le custom type MealsOverviewRoute à été fait.

const MealsOverviewScreen = ({ route }: Props) => {
  const route2 = useRoute<MealsOverviewRoute>();

  const categoryId = route2.params.categoryId;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  return (
    <View style={styles.container}>
      <Text>{categoryId}</Text>
      {/* TODO:display in a flatlist */}
      {displayedMeals.map((meal) => (
        <Text>{meal.title}</Text>
      ))}
    </View>
  );
};

export default MealsOverviewScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: deviceWidth / 24,
  },
});
