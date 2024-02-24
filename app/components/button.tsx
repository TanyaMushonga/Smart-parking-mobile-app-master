import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type textprops = {
  text: string;
};

const BTN = (props: textprops) => {
  const navigation = useNavigation();
  return (
    <Link href={"/tabs"} asChild>
      <TouchableOpacity onPress={() => {}} style={styles.btn}>
        <Text style={{ textAlign: "center", color: "white" }}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "blue",
    width: "100%",
    height: hp("6.5%"),
    borderRadius: 10,
    padding: wp("2%"),
  },
});

export default BTN;
