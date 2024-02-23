import { View, Text, Image } from "react-native";
import React from "react";

import { Tabs } from "expo-router";

const home = require("./../../assets/home.png");
const homeselected = require("./../../assets/homeselected.png");
const topup = require("./../../assets/topup.png");
const help = require("./../../assets/help.png");
const helpselected = require("./../../assets/helpselected.png");
const user = require("./../../assets/user1.png");
const notificationselected = require("./../../assets/notificationselected.png");
const notification = require("./notification");
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
          height: 72,
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
                  padding: 16,
                  borderTopColor: focused ? "blue" : "white",
                  borderTopWidth: 2,
                }}
              >
                <Image
                  source={focused ? home : homeselected}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? "blue" : "black",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "blue" : "black",
                    fontSize: 12,
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
                  padding: 16,
                  borderTopColor: focused ? "blue" : "white",
                  borderTopWidth: 2,
                }}
              >
                <Image
                  source={focused ? topup : topup}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? "blue" : "black",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "blue" : "black",
                    fontSize: 12,
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
        name="help"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  padding: 16,
                  borderTopColor: focused ? "blue" : "white",
                  borderTopWidth: 2,
                }}
              >
                <Image
                  source={focused ? help : helpselected}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? "blue" : "black",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "blue" : "black",
                    fontSize: 12,
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
        name="notification"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  padding: 16,
                  borderTopColor: focused ? "blue" : "white",
                  borderTopWidth: 2,
                }}
              >
                <Image
                  source={focused ? notification : notificationselected}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? "blue" : "black",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "blue" : "black",
                    fontSize: 12,
                  }}
                >
                  Notification
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
                  padding: 16,
                  borderTopColor: focused ? "blue" : "white",
                  borderTopWidth: 2,
                }}
              >
                <Image
                  source={focused ? user : user}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? "blue" : "black",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "blue" : "black",
                    fontSize: 12,
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
