import React from "react";
import { Image, StyleSheet, View } from "react-native";

import CustomText from "../../../components/CustomText";

export default function Details({
  basketName,
  logoFarm,
  farmName,
  description,
  price,
}) {
  return (
    <>
      <CustomText style={styles.basketName}>{basketName}</CustomText>
      <View style={styles.farm}>
        <Image source={logoFarm} style={styles.imageFarm} />
        <CustomText style={styles.nameFarm}>{farmName}</CustomText>
      </View>
      <CustomText>{description}</CustomText>
      <CustomText style={styles.basketPrice}>{price}</CustomText>
    </>
  );
}

const styles = StyleSheet.create({
  basketName: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },
  farm: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imageFarm: {
    width: 32,
    height: 32,
  },
  nameFarm: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  basketDesc: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  basketPrice: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
