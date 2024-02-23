import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DividerWithText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>OR</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "gray",
  },
  text: {
    marginHorizontal: 10,
  },
});

export default DividerWithText;
