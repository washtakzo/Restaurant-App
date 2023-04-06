import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Categorie from "../components/Categorie";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={(itemData) => (
          <Categorie title={itemData.item.title} color={itemData.item.color} />
        )}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: { flex: 1 },
});
