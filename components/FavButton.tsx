import { StyleSheet, Pressable, Dimensions } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  onPress?: () => void;
  color?: string;
  name?: "star" | "star-outline";
};

const deviceWidth = Dimensions.get("window").width;

const FavButton = ({ onPress, color = "#f1faee", name = "star" }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.buttonPressed}
      onPress={onPress}
    >
      <Ionicons name={name} size={deviceWidth / 16} color={color} />
    </Pressable>
  );
};

export default FavButton;

const styles = StyleSheet.create({
  buttonPressed: { opacity: 0.7 },
});
