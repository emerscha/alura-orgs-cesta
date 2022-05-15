import React from "react";
import { StyleSheet, Dimensions, Image, Text, View } from "react-native";

import topImage from "../../assets/topo.png";
import logoFarm from "../../assets/logo.png";

const width = Dimensions.get("screen").width;

export default function Cesta() {
  return (
    <>
      <Image source={topImage} style={styles.topImage} />
      <Text style={styles.pageTitle}>Detalhes da Cesta</Text>
      <View style={styles.basketView}>
        <Text style={styles.basketName}>Cesta de Verduras</Text>
        <View style={styles.farm}>
          <Image source={logoFarm} style={styles.imageFarm} />
          <Text style={styles.basketFarm}>Jenny Jack Farm</Text>
        </View>
        <Text style={styles.basketDesc}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha
        </Text>
        <Text style={styles.basketPrice}>R$ 40,00</Text>
      </View>
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
  basketView: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
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
  basketFarm: {
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
