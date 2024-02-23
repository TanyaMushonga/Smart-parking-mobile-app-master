import { View, Text, Image } from "react-native";
import React from "react";

import { Tabs } from "expo-router";

const home = require("./../../assets/home.png");
const homeselected = require("./../../assets/homeselected.png");
const topup = require("./../../assets/topup.png");
const help = require("./../../assets/help.png");
const helpselected = require("./../../assets/helpselected.png");
const user = require("./../../assets/user1.png");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const _layouts = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          height: hp("7%"),
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  padding: wp("4%"),
                  borderTopColor: focused ? "blue" : "white",
                  borderTopWidth: wp("0.5"),
                }}
              >
                <Image
                  source={focused ? home : homeselected}
                  style={{
                    width: wp("6%"),
                    height: wp("6%"),
                    tintColor: focused ? "blue" : "black",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "blue" : "black",
                    fontSize: wp("3%"),
                  }}
                >
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="topup"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  padding: wp("4%"),
                  borderTopColor: focused ? "blue" : "white",
                  borderTopWidth: wp("0.5"),
                }}
              >
                <Image
                  source={focused ? topup : topup}
                  style={{
                    width: wp("6%"),
                    height: wp("6%"),
                    tintColor: focused ? "blue" : "black",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "blue" : "black",
                    fontSize: wp("3%"),
                  }}
                >
                  Topup
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  padding: wp("4%"),
                  borderTopColor: focused ? "blue" : "white",
                  borderTopWidth: wp("0.5"),
                }}
              >
                <Image
                  source={focused ? help : helpselected}
                  style={{
                    width: wp("6%"),
                    height: wp("6%"),
                    tintColor: focused ? "blue" : "black",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "blue" : "black",
                    fontSize: wp("3%"),
                  }}
                >
                  Support
                </Text>
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="accounts"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  padding: wp("4%"),
                  borderTopColor: focused ? "blue" : "white",
                  borderTopWidth: wp("0.5"),
                }}
              >
                <Image
                  source={focused ? user : user}
                  style={{
                    width: wp("6%"),
                    height: wp("6%"),
                    tintColor: focused ? "blue" : "black",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "blue" : "black",
                    fontSize: wp("3%"),
                  }}
                >
                  Account
                </Text>
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
};

export default _layouts;
