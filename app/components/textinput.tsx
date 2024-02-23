import { View, Text, TextInput } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
type TextinputProps = {
  placeholder: string;
};

const Textinput = (props: TextinputProps) => {
  return (
    <View>
      <TextInput
        style={{
          height: hp("6%"),
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          paddingLeft: 10,
        }}
        placeholder={props.placeholder}
      />
    </View>
  );
};

export default Textinput;
