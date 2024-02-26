import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import PasswordInput from "../components/passwordinput";

const index = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ padding: wp("3%") }}
    >
      <ScrollView>
        <Text
          style={{
            textAlign: "center",
            fontSize: wp("6%"),
            fontWeight: "bold",
            marginVertical: hp("3%"),
          }}
        >
          Change password
        </Text>
        <Text
          style={{
            fontSize: wp("4%"),
            marginVertical: hp("3%"),
          }}
        >
          Enter old password
        </Text>
        <PasswordInput placeholder={"Old password"} />
        <Text
          style={{
            fontSize: wp("4%"),
            marginVertical: hp("3%"),
          }}
        >
          Enter new password
        </Text>
        <PasswordInput placeholder={"New password"} />
        <Text
          style={{
            fontSize: wp("4%"),
            marginVertical: hp("3%"),
          }}
        >
          Confirm password
        </Text>
        <PasswordInput placeholder={"Confirm password"} />
        <Link href={""} asChild style={{ marginVertical: wp("3%") }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: "100%",
              height: hp("6.5%"),
              backgroundColor: "blue",
              padding: wp("2%"),
              borderRadius: 10,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Change password
            </Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default index;
