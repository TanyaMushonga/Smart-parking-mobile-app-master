import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

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
        <Icon name={props.icon} size={24} color="white" />
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "blue",
    width: "45%",
    height: 50,
    borderRadius: 10,
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
    marginLeft: 10,
  },
});

export default SigninBtn;
