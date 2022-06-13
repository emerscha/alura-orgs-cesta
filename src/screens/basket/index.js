import React from "react";
import { View, StyleSheet } from "react-native";

import Top from "./components/Top";
import Details from "./components/Details";

export default function Basket({ top, details }) {
  return (
    <>
      <Top {...top} />
      <View style={styles.basketView}>
        <Details {...details} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  basketView: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
