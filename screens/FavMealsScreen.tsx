import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import MealsContext from "../store/meals-context";
import Meal from "../components/Meal";

const FavMealsScreen = () => {
  const mealsCtx = React.useContext(MealsContext);
  const favMeals = mealsCtx.meals.filter((meal) => meal.isFavorite);

  return (
    <View style={styles.container}>
      <FlatList
        data={favMeals}
        renderItem={({ item }: { item: Meal }) => (
          <Meal
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
          />
        )}
        keyExtractor={(item: Meal) => item.id}
      />
    </View>
  );
};

export default FavMealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
