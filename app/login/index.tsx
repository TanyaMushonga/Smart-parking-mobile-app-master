import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

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

const login = () => {
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
          <Text style={styles.createaccount}>Create an account</Text>
          <Text style={styles.easy}>Parking has been made easy</Text>
        </View>
        <View style={styles.inputcontainer}>
          <View style={styles.input}>
            <Text>Email</Text>
            <Textinput placeholder={"Email"} />
          </View>
          <View style={styles.input}>
            <Text>Fullname</Text>
            <Textinput placeholder={"Fullname"} />
          </View>
          <View style={styles.input}>
            <Text>Phone number</Text>
            <Numberinput placeholder={"+263 "} />
          </View>
          <View style={styles.input}>
            <Text>Password</Text>
            <PasswordInput placeholder={"Enter password"} />
          </View>
        </View>
        <View style={styles.btncontainer}>
          <BTN text="Create account" />
        </View>
        <Link style={styles.link} href="/login/signin">
          <Text>Already have an account?</Text>
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
    width: 100,
    height: 100,
  },

  signinview: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 24,
    height: "100%",
  },
  textaccount: {
    marginTop: 20,
  },
  createaccount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  easy: {
    fontSize: 16,
    color: "grey",
  },
  inputcontainer: {
    marginTop: 20,
    gap: 10,
  },
  input: {
    gap: 10,
  },
  btncontainer: {
    marginTop: 20,
    backgroundColor: "white",
  },
  link: {
    color: "blue",
    marginTop: 10,
  },
  signinoptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
  },
});

export default login;
