import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";

type textprops = {
  text: string;
};

const BTN = (props: textprops) => {
  const navigation = useNavigation();
  return (
    <Link href={"/tabs"} asChild>
      <TouchableOpacity onPress={() => {}} style={styles.btn}>
        <Text style={{ textAlign: "center", color: "white", marginTop: 15 }}>
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
    height: 50,
    borderRadius: 10,
  },
});

export default BTN;
