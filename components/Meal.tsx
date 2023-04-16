import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

type Props = {
  id: string;
  imageUrl: string;
  title: string;
  duration: string;
  complexity: string;
  affordability: string;
};

const Meal = ({
  id,
  imageUrl,
  title,
  duration,
  complexity,
  affordability,
}: Props) => {
  const navigation = useNavigation<Navigation>();

  const pressHandler = () => {
    navigation.navigate("MealDetailScreen", { mealId: id });
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={pressHandler}
      >
        <View style={{ flex: 1 }}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.detail}>{duration}m</Text>
              <Text style={styles.detail}>
                {complexity.toLocaleUpperCase()}
              </Text>
              <Text style={styles.detail}>
                {affordability.toLocaleUpperCase()}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Meal;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: deviceWidth / 24,
    overflow: "hidden",
    margin: deviceWidth / 16,
    elevation: 4,
  },
  buttonPressed: {
    opacity: 0.6,
  },
  image: {
    width: "100%",
    height: deviceWidth / 1.6,
  },
  textContainer: {
    backgroundColor: "white",
    padding: deviceWidth / 26,
  },
  title: {
    fontSize: deviceWidth / 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: deviceWidth / 24,
  },
  detail: {
    fontSize: deviceWidth / 34,
    marginHorizontal: deviceWidth / 28,
  },
});
