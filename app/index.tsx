import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const car1 = require("../assets/car1.png");
const car2 = require("../assets/car2.png");

const index = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={car1} alt="car" style={styles.car1} />
      <Image source={car2} alt="car" style={styles.car2} />

      <Text style={styles.text}>Welcome to smart parking solution</Text>
      <Text style={styles.subheader}>
        Smart parking is an app that gives you the convinient of finding free
        parking slots within the city and handles everything for your
      </Text>
      <View style={styles.btnview}>
        <Link style={styles.link} href="/login/signin" asChild>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={{ textAlign: "center", color: "white", marginTop: 15 }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </Link>
        <Link style={styles.link} href="/login">
          <Text>Don't have account?</Text>
        </Link>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    display: "flex",
    height: "100%",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  car1: {
    width: 200,
    height: 200,
    left: 130,
  },
  car2: {
    width: 200,
    height: 160,
    left: 20,
  },
  btnview: {
    marginTop: 20,
  },
  btn: {
    width: "100%",
    height: 50,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  subheader: {
    marginTop: 20,
    fontSize: 16,
  },
  link: {
    color: "blue",
    marginTop: 10,
  },
});

export default index;
