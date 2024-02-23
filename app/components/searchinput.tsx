import React, { useState } from "react";
import { TextInput, View, StyleSheet, Image } from "react-native";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const searchImage = require("./../../assets/search.png");

  return (
    <View style={styles.container}>
      <Image
        source={searchImage}
        alt="search"
        style={{ width: 24, height: 24 }}
      />
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={setSearch}
        placeholder="Search for parking slot..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 5,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    padding: 8,
  },
});

export default SearchInput;
