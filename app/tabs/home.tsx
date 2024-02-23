import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import SearchInput from "../components/searchinput";
import Parkingspace from "../components/parkingspace";
import SearchFilter from "../components/SearchFilter";

const index = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, gap: 10 }}>
        <SearchInput />
        <ScrollView>
          <SearchFilter />
        </ScrollView>
      </View>

      <View style={styles.maps}></View>

      <View style={{ gap: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Available parking space
        </Text>
        <Parkingspace />
        <Parkingspace />
        <Parkingspace />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    height: "auto",
  },
  maps: {
    backgroundColor: "#fff",
    height: 300,
    width: "100%",
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default index;
