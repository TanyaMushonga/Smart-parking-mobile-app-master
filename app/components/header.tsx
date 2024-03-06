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
          color: "#fff",
          fontWeight: "bold",
          fontSize: wp("6%"),
          backgroundColor: "#2a3bbf",
          padding: wp("2%"),
          borderRadius: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        Park Smarter
      </Text>
      <View
        style={{ flexDirection: "row", gap: wp("3%"), alignItems: "center" }}
      >
        <TouchableOpacity style={{}}>
          <Link href={"./../search"}>
            <Ionicons name="search" size={26} color="black" />
          </Link>
        </TouchableOpacity>

        <Link href={"./../tabs/accounts"} asChild style={{}}>
          <TouchableOpacity>
            <Image
              source={require("./../../assets/profile.jpg")}
              style={{
                width: wp("8%"),
                height: wp("8%"),
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
