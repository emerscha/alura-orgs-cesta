import React from "react";
import { Text, StyleSheet } from "react-native";

export default function CustomText({ children, style }) {
  let defaultStyle = styles.text;

  if (style?.fontWeight === "bold") {
    defaultStyle = styles.boldText;
  }
  return <Text style={[style, defaultStyle]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  boldText: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});
