import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const next = require("./../../assets/next.png");

const accounts = () => {
  return (
    <ScrollView style={{ padding: wp("3%") }}>
      <Text
        style={{ fontWeight: "bold", fontSize: wp("6%"), textAlign: "center" }}
      >
        Settings
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: wp("5%"),
          marginTop: wp("3%"),
        }}
      >
        Account
      </Text>
      <Link href={"/changepassword"} asChild>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: wp("4%"),
              marginTop: wp("3%"),
            }}
          >
            Change Password
          </Text>
          <Image source={next} style={{ width: wp("5%"), height: wp("5%") }} />
        </TouchableOpacity>
      </Link>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: wp("5%"),
          marginTop: wp("7%"),
        }}
      >
        Profile
      </Text>
      <Link href={"/changepassword"} asChild>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: wp("4%"),
              marginTop: wp("3%"),
            }}
          >
            Change profile picture
          </Text>
          <Image source={next} style={{ width: wp("5%"), height: wp("5%") }} />
        </TouchableOpacity>
      </Link>
      <Link href={"/changepassword"} asChild>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: wp("4%"),
              marginVertical: wp("5%"),
            }}
          >
            Change username
          </Text>
          <Image source={next} style={{ width: wp("5%"), height: wp("5%") }} />
        </TouchableOpacity>
      </Link>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: wp("5%"),
          marginTop: wp("5%"),
        }}
      >
        Support
      </Text>
      <Link href={"/changepassword"} asChild>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: wp("4%"),
              marginTop: wp("3%"),
            }}
          >
            Send Feedback
          </Text>
          <Image source={next} style={{ width: wp("5%"), height: wp("5%") }} />
        </TouchableOpacity>
      </Link>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: wp("5%"),
          marginTop: wp("7%"),
        }}
      >
        Legal
      </Text>
      <Link href={"/changepassword"} asChild>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: wp("4%"),
              marginTop: wp("3%"),
            }}
          >
            Privacy policy
          </Text>
          <Image source={next} style={{ width: wp("5%"), height: wp("5%") }} />
        </TouchableOpacity>
      </Link>
      <Link
        href={"/changepassword"}
        asChild
        style={{ marginBottom: hp("10%") }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: wp("4%"),
              marginVertical: wp("5%"),
            }}
          >
            Terms and conditions
          </Text>
          <Image source={next} style={{ width: wp("5%"), height: wp("5%") }} />
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
};

export default accounts;
