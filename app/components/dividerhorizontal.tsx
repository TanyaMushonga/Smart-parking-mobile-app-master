import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const DividerWithoutText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp("1%"),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "grey",
  },
});

export default DividerWithoutText;
