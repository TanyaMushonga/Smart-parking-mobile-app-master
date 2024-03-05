import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const Headers = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "sans-serif",
          fontStyle: "italic",
          color: "black",
          fontWeight: "bold",
          fontSize: wp("6%"),
        }}
      >
        Park Smarter
      </Text>
      <TouchableOpacity style={{}}>
        <Link href={"./../search"}>
          <Ionicons name="search" size={24} color="black" />
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default Headers;
