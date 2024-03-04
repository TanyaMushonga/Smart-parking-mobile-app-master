import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Divider from "../components/divider";
import BTN from "../components/button";
import { Link } from "expo-router";
import SigninBtn from "../components/signinbtn";
const driver = require("../../assets/user2.png");
import firebase from "firebase/app";
import "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./../config/firebase";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const auth = getAuth(app);

  const [value, setValue] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleTextChange = (text: string) => {
    const formattedText = text.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    setValue(formattedText);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      Alert.alert("Success", "User created successfully");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        Alert.alert("Error", "The email is already in use");
      } else {
        Alert.alert("Error", "Failed to create user");
      }
    } finally {
      setIsLoading(false);
    }
  };
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
            <TextInput
              style={{
                height: hp("6%"),
                borderColor: "gray",
                backgroundColor: "#f2f2f2",
                borderRadius: 5,
                padding: wp("2%"),
              }}
              placeholder={"Enter email"}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.input}>
            <Text>Fullname</Text>
            <TextInput
              style={{
                height: hp("6%"),
                borderColor: "gray",
                backgroundColor: "#f2f2f2",
                borderRadius: 5,
                padding: wp("2%"),
              }}
              placeholder={"Enter fullname"}
              value={fullname}
              onChangeText={setFullname}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.input}>
            <Text>Phone number</Text>
            <TextInput
              style={{
                height: hp("6%"),
                borderColor: "gray",
                backgroundColor: "#f2f2f2",
                borderRadius: 5,
                padding: wp("2%"),
              }}
              keyboardType="phone-pad"
              onChangeText={handleTextChange}
              value={value}
              placeholder="Enter phone number"
            />
          </View>
          <View style={styles.input}>
            <Text>Password</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#f2f2f2",
                borderRadius: 5,
                padding: wp("2%"),
              }}
            >
              <TextInput
                secureTextEntry={!isPasswordVisible}
                style={{ flex: 1, height: hp("4%") }}
                placeholder={"Enter password"}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Icon
                  name={isPasswordVisible ? "eye-slash" : "eye"}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.btncontainer}>
          <TouchableOpacity
            onPress={() => {
              handleSignUp();
            }}
            style={{
              backgroundColor: "blue",
              width: "100%",
              height: hp("6.5%"),
              borderRadius: 10,
              padding: wp("2%"),
            }}
            disabled={isLoading}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              {isLoading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                "Sign Up"
              )}
            </Text>
          </TouchableOpacity>
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
    marginBottom: hp("5%"),
  },
});

export default login;
