import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  Linking,
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type ParkingslotsProps = {
  // Define props here.
  street: string;
  price: string;
};

const Parkingslots = (props: ParkingslotsProps) => {
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

  const handleGetDirections = (latitude, longitude) => {
    const url = Platform.select({
      ios: `maps://app?saddr=&daddr=${latitude},${longitude}`,
      android: `geo:0,0?q=${latitude},${longitude}`,
    });

    if (url) {
      Linking.openURL(url);
    } else {
      console.error("Unable to get directions, unknown platform");
    }
  };

  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: wp("2%"),
        borderRadius: 5,
      }}
    >
      <View
        style={{ flexDirection: "row", gap: wp("2%"), alignItems: "center" }}
      >
        <FontAwesome name="map-marker" size={wp("6%")} color="#000" />
        <Text style={{ fontWeight: "500" }}>{props.street}</Text>
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
            {props.price}
          </Text>
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
            onPress={() => handleGetDirections(-20.16, 28.68)}
          >
            <View
              style={{
                flexDirection: "row",
                gap: wp("2%"),
                alignItems: "center",
              }}
            >
              <Image
                source={require("./../../assets/drive.png")}
                style={{ width: wp("6%"), height: wp("6%") }}
              />
              <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Get directions
              </Text>
            </View>
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
            <View
              style={{
                flexDirection: "row",
                gap: wp("2%"),
                alignItems: "center",
              }}
            >
              <Image
                source={require("./../../assets/reserve.png")}
                style={{ width: wp("6%"), height: wp("6%") }}
              />
              <Text style={{ color: "black", fontWeight: "bold" }}>
                Reserve slot
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Parkingslots;
