import React from "react";

import { Image, StyleSheet, Dimensions } from "react-native";
import CustomText from "../../../components/CustomText";

import topImage from "../../../../assets/topo.png";

const width = Dimensions.get("screen").width;

export default function Top({ title }) {
  return (
    <>
      <Image source={topImage} style={styles.topImage} />
      <CustomText style={styles.pageTitle}>{title}</CustomText>
    </>
  );
}

const styles = StyleSheet.create({
  topImage: {
    width: "100%",
    height: (578 / 768) * width,
  },
  pageTitle: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});
