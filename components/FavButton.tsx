import { StyleSheet, Pressable, Dimensions } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  onPress?: () => void;
  color?: string;
};

const deviceWidth = Dimensions.get("window").width;

const FavButton = ({ onPress, color = "#f1faee" }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.buttonPressed}
      onPress={onPress}
    >
      <Ionicons name="star" size={deviceWidth / 16} color={color} />
    </Pressable>
  );
};

export default FavButton;

const styles = StyleSheet.create({
  buttonPressed: { opacity: 0.7 },
});
