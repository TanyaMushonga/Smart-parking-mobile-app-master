import { View, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";

const Parkingspace = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: wp("2.5%"),
        borderRadius: wp("1.25%"),
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flex: 1, gap: wp("1.25%") }}>
          <View style={{ flexDirection: "row", gap: wp("2%") }}>
            <Text style={{ fontWeight: "bold" }}>Nelson mandela street</Text>
          </View>
          <View>
            <Text style={{ color: "blue" }}>30 mins drive</Text>
            <Text
              style={{
                color: "green",
                fontWeight: "bold",
                backgroundColor: "red",
              }}
            >
              $2/hr
            </Text>
          </View>
        </View>
        <View style={{}}>
          <View
            style={{
              flexDirection: "row",
              gap: wp("1.25%"),
              height: hp("3.75%"),
              backgroundColor: "red",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#B0D2FF",
                borderRadius: wp("2.5%"),
                paddingHorizontal: wp("2.5%"),
                paddingVertical: wp("1%"),
              }}
            >
              <Text style={{ color: "blue" }}>Reserve</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#B0D2D2",
                borderRadius: wp("2.5%"),
                paddingHorizontal: wp("2.5%"),
                paddingVertical: wp("1%"),
              }}
            >
              <Text style={{ color: "green" }}>Drive</Text>
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: "blue" }}>
            <Text>hey</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Parkingspace;
