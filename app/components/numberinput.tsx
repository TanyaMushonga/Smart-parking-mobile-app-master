import { View, TextInput } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface Props {
  placeholder: string;
}

const Numberinput = (props: Props) => {
  const [value, setValue] = useState("");

  const handleTextChange = (text: string) => {
    const formattedText = text.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    setValue(formattedText);
  };

  return (
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
      placeholder={props.placeholder}
    />
  );
};

export default Numberinput;
