import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";

type MealDetailRoute = {
  params: { mealId: string };
  key: string;
  name: string;
  path?: string | undefined;
};

const MealDetailScreen = () => {
  const route = useRoute<MealDetailRoute>();

  const mealId = route.params.mealId;

  const meal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: meal?.imageUrl }} />
        <Text style={styles.title}>{meal?.title}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detail}>{meal?.duration}m</Text>
          <Text style={styles.detail}>{meal?.complexity.toUpperCase()}</Text>
          <Text style={styles.detail}>{meal?.affordability.toUpperCase()}</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <View style={styles.separator} />
          {meal?.ingredients.map((ingredient: string) => (
            <Text style={styles.sectionItem}>{ingredient}</Text>
          ))}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Steps</Text>
          {meal?.steps.map((step: string) => (
            <Text style={styles.sectionItem}>{step}</Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: deviceWidth,
  },
  title: {
    textAlign: "center",
    fontSize: deviceWidth / 18,
    fontWeight: "bold",
    padding: deviceWidth / 42,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: deviceWidth / 42,
  },
  detail: {
    fontSize: deviceWidth / 32,
    marginHorizontal: deviceWidth / 42,
  },
  sectionContainer: {
    alignItems: "center",
    marginVertical: deviceWidth / 42,
    width: "80%",
  },
  separator: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e63946",
    marginVertical: deviceWidth / 84,
  },
  sectionTitle: {
    color: "#e63946",
    textAlign: "center",
    fontSize: deviceWidth / 22,
    fontWeight: "bold",
  },
  sectionItem: {
    backgroundColor: "#e63946",
    color: "#f1faee",
    padding: deviceWidth / 62,
    borderRadius: deviceWidth / 42,
    width: "100%",
    textAlign: "center",
    marginVertical: deviceWidth / 122,
  },
});