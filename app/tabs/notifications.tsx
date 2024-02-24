import { View, Text, Image, FlatList } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
const lowaccount = require("./../../assets/lowaccount.png");
const newparking = require("./../../assets/parkingspace.png");
const recharge = require("./../../assets/recharge.png");

const notifications = [
  {
    title: "Account topup successful",
    date: "2 min ago",
    image: recharge,
  },
  {
    title: "Your account is now very low please top up!",
    date: "2 days ago",
    image: lowaccount,
  },
  {
    title: "New parking space available",
    date: "6 days ago",
    image: newparking,
  },
];

const Support = () => {
  return (
    <FlatList
      data={notifications}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <Text
          style={{
            fontWeight: "bold",
            fontSize: wp("6%"),
            marginVertical: hp("3%"),
            textAlign: "center",
          }}
        >
          Notification
        </Text>
      }
      renderItem={({ item: notification }) => (
        <View
          style={{ flexDirection: "row", padding: wp("3%"), gap: wp("5%") }}
        >
          <View
            style={{
              backgroundColor: "#bcbcbc",
              padding: wp("1%"),
              borderRadius: 5,
            }}
          >
            <Image
              source={notification.image}
              style={{
                width: wp("10%"),
                height: wp("10%"),
              }}
            />
          </View>
          <View>
            <Text style={{ fontSize: wp("4%") }}>{notification.title}</Text>
            <Text style={{ color: "#999999" }}>{notification.date}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default Support;
