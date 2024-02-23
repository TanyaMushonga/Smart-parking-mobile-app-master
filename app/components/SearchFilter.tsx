import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";

const SearchFilter = () => {
  return (
    <ScrollView style={{}}>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#B0D2FF",
            padding: wp("1.25%"),
            borderRadius: wp("1.75%"),
          }}
        >
          <Text style={{ color: "blue" }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#B0D2FF",
            padding: wp("1.25%"),
            borderRadius: wp("1.25%"),
          }}
        >
          <Text style={{ color: "blue" }}>Paid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#B0D2FF",
            padding: wp("1.25%"),
            borderRadius: wp("1.25%"),
          }}
        >
          <Text style={{ color: "blue" }}>None Paid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#B0D2FF",
            padding: wp("1.25%"),
            borderRadius: wp("1.25%"),
          }}
        >
          <Text style={{ color: "blue" }}>CBD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#B0D2FF",
            padding: wp("1.25%"),
            borderRadius: wp("1.25%"),
          }}
        >
          <Text style={{ color: "blue" }}>Avenues</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SearchFilter;
