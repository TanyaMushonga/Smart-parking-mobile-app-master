import React, { useState } from "react";
import { TextInput, View, StyleSheet, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const searchImage = require("./../../assets/search.png");

  return (
    <View style={styles.container}>
      <Image
        source={searchImage}
        alt="search"
        style={{ width: wp("6%"), height: wp("6%") }}
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
    borderRadius: wp("1.25%"),
    padding: wp("1.25%"),
  },
  input: {
    marginLeft: wp("2.5%"),
    flex: 1,
    padding: wp("2%"),
  },
});

export default SearchInput;
