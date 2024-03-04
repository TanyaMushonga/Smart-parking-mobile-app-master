import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const searchImage = require("./../../assets/search.png");
  return (
    <View style={{ padding: wp("3%") }}>
      <View
        style={{
          flexDirection: "row",
          padding: wp("3%"),
          gap: wp("3%"),
          alignItems: "center",
        }}
      >
        <Link href={"./../tabs/home"}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Link>

        <View
          style={{
            backgroundColor: "#e9ebf0",
            width: wp("80%"),
            flexDirection: "row",
            alignItems: "center",

            borderRadius: wp("2.25%"),
            padding: wp("0.1%"),
          }}
        >
          <Image
            source={searchImage}
            alt="search"
            style={{ width: wp("6%"), height: wp("6%") }}
          />
          <TextInput
            style={{ marginLeft: wp("2.5%"), flex: 1, padding: wp("1%") }}
            value={search}
            onChangeText={setSearch}
            placeholder="Search for parking slot..."
          />
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;
