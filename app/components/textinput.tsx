import { View, Text, TextInput } from "react-native";
import React from "react";

type TextinputProps = {
  placeholder: string;
};

const Textinput = (props: TextinputProps) => {
  return (
    <View>
      <TextInput
        style={{
          height: 40,
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
