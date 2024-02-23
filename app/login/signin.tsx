import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import Textinput from "../components/textinput";
import Numberinput from "../components/numberinput";
import PasswordInput from "../components/passwordinput";
import Divider from "../components/divider";
import BTN from "../components/button";
import { Link } from "expo-router";
import SigninBtn from "../components/signinbtn";
import Icon from "react-native-vector-icons/FontAwesome";
const driver = require("../../assets/user2.png");

const Signin = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        <View style={styles.signinview}>
          <Image source={driver} alt="driver" style={styles.signin} />
        </View>
        <View style={styles.textaccount}>
          <Text style={styles.createaccount}>Login your account</Text>
          <Text style={styles.easy}>Welcome back</Text>
        </View>
        <View style={styles.inputcontainer}>
          <View style={styles.input}>
            <Text>Email</Text>
            <Textinput placeholder={"Email"} />
          </View>

          <View style={styles.input}>
            <Text>Password</Text>
            <PasswordInput placeholder={"Enter password"} />
          </View>
        </View>
        <View style={styles.btncontainer}>
          <BTN text="Login" />
        </View>
        <Link style={styles.link} href="/login">
          <Text>Don't have an account?</Text>
        </Link>
        <Divider />
        <View style={styles.signinoptions}>
          <SigninBtn text="Google" icon="google" />
          <SigninBtn text="Facebook" icon="facebook" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  signin: {
    width: wp("25%"), // 25% of screen width
    height: hp("12.5%"), // 12.5% of screen height
  },

  signinview: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: wp("6%"), // 6% of screen width
    height: "100%",
  },
  textaccount: {
    marginTop: hp("2.5%"), // 2.5% of screen height
  },
  createaccount: {
    fontSize: wp("6%"), // 6% of screen width
    fontWeight: "bold",
  },
  easy: {
    fontSize: wp("4%"), // 4% of screen width
    color: "grey",
  },
  inputcontainer: {
    marginTop: hp("2.5%"), // 2.5% of screen height
    gap: wp("2.5%"), // 2.5% of screen width
  },
  input: {
    gap: wp("2.5%"), // 2.5% of screen width
  },
  btncontainer: {
    marginTop: hp("2.5%"), // 2.5% of screen height
    backgroundColor: "white",
  },
  link: {
    color: "blue",
    marginTop: hp("2.5%"), // 2.5% of screen height
  },
  signinoptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: wp("1.25%"), // 1.25% of screen width
  },
});

export default Signin;
