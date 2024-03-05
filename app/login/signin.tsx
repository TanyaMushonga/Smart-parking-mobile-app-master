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
  ActivityIndicator,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useState } from "react";
import Divider from "../components/divider";
import BTN from "../components/button";
import { Link } from "expo-router";
import SigninBtn from "../components/signinbtn";
import Icon from "react-native-vector-icons/FontAwesome";
const driver = require("../../assets/user2.png");
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSignIn = async () => {
    const auth = getAuth();
    if (!email || !password) {
      setErrorMessage("fill in the credentials");
      return;
    }
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Signed in
      const user = userCredential.user;
      Alert.alert("Success", "You have successfully signed in");
      // ...
    } catch (error) {
      setErrorMessage("credentials are incorrect");
      setTimeout(() => {
        setErrorMessage("");
        setEmail("");
        setPassword("");
      }, 800);
      // ..
    } finally {
      setIsLoading(false);
    }
  };

  const [isLoading, setIsLoading] = useState(false);
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
        {errorMessage ? (
          <Text style={{ color: "red" }}>{errorMessage}</Text>
        ) : null}
        <View style={styles.btncontainer}>
          <TouchableOpacity
            onPress={() => {
              handleSignIn();
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
                "Sign in"
              )}
            </Text>
          </TouchableOpacity>
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
