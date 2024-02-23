import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type textprops = {
  text: string;
  icon: string;
};

const SigninBtn = (props: textprops) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("clicked");
      }}
      style={styles.btn}
    >
      <View style={styles.innerContainer}>
        <Icon name={props.icon} size={wp("6%")} color="white" />
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "blue",
    width: wp("40%"),
    height: hp("6.25%"),
    borderRadius: wp("2.5%"),
    justifyContent: "center",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
    marginLeft: wp("2.5%"),
  },
});

export default SigninBtn;
