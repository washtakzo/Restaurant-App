import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  Platform,
} from "react-native";
import React from "react";

type Props = {
  title: string;
  color: string;
  onPress?: () => void;
};

const Categorie = ({ title, color, onPress }: Props) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Categorie;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: deviceWidth / 22,
    height: deviceWidth / 2.4,
    borderRadius: deviceWidth / 24,
    elevation: deviceWidth / 72,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: deviceWidth / 18,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: deviceWidth / 22,
  },
});
