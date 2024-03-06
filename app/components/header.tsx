import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import * as Font from "expo-font";
import {
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

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
      <View
        style={{ flexDirection: "row", gap: wp("3%"), alignItems: "center" }}
      >
        <TouchableOpacity style={{}}>
          <Link href={"./../search"}>
            <Ionicons name="search" size={24} color="black" />
          </Link>
        </TouchableOpacity>

        <Link href={"./../tabs/accounts"} asChild style={{}}>
          <TouchableOpacity>
            <Image
              source={require("./../../assets/profile.jpg")}
              style={{
                width: wp("10%"),
                height: wp("10%"),
                borderRadius: wp("5%"), // half of width and height to make it fully rounded
                borderWidth: 2, // width of the border
                borderColor: "blue", // color of the border
              }}
            />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Headers;
