import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Categorie from "../components/Categorie";
import { CATEGORIES } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";

type Props = {
  //TODO: récupérer le type exact de navigation fourni par la librairie
  //NOTE:le type Navigation est partiellement défini dans types.d.ts car une erreur sur la librairie
  //semble présente sur React Native après la version 0.65 pour le hook useNavigation déclenchant une erreur de typage
  //https://stackoverflow.com/questions/68667766/react-native-typescript-string-is-not-assignable-to-parameter-of-type-never
  navigation: Navigation;
};

const CategoriesScreen = ({ navigation }: Props) => {
  //soit on utilise la props navigation present pour les composants définient en Screen ou soit on utilise useNavigation pour récupérer cet objet
  const navigation2 = useNavigation<Navigation>();
  const pressHandler = (categoryId: string) => {
    // navigation.navigate("MealsOverviewScreen");
    navigation2.navigate("MealsOverviewScreen", { categoryId });
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={(itemData) => (
          <Categorie
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={() => pressHandler(itemData.item.id)}
          />
        )}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: { flex: 1 },
});
