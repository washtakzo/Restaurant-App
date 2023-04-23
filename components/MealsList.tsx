import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Meal from "./Meal";

type Props = {
  items: Meal[];
};

const MealsList = ({ items }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
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
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
