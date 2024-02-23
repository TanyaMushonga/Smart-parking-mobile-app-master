import { View, Text, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Parkingslots = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  const Drive = () => {
    // Handle the press here.
    console.log("Drive button pressed");
  };

  const Reserve = () => {
    // Handle the press here.
    console.log("Reserve button pressed");
  };

  return (
    <View
      style={{
        backgroundColor: "#fff",
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
      <View
        style={{ flexDirection: "row", gap: wp("2%"), alignItems: "center" }}
      >
        <FontAwesome name="map-marker" size={wp("6%")} color="#000" />
        <Text style={{ fontWeight: "bold" }}>Nelson Mandela Str</Text>
      </View>
      <View style={{ marginTop: hp("2%") }}>
        <Text style={{ color: "grey" }}>Price</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{ color: "#808080", fontSize: wp("7%"), fontWeight: "bold" }}
          >
            $1.50/hr
          </Text>
          <TouchableOpacity onPress={toggleFavourite}>
            <FontAwesome
              name={isFavourite ? "heart" : "heart-o"}
              size={wp("8%")}
              color="blue"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: hp("3%"),
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#2aa0cd",
              padding: wp("3%"),
              borderRadius: 5,
              width: wp("40%"),
            }}
            onPress={Drive}
          >
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>Drive</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#eeeeee",
              padding: wp("3%"),
              borderRadius: 5,
              width: wp("40%"),
            }}
            onPress={Reserve}
          >
            <Text style={{ color: "black", fontWeight: "bold" }}>Reserve</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Parkingslots;
