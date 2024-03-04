import React, { useState } from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const MyComponent = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttons = ["All", "Paid", "None Paid", "CBD", "Avenues"];

  const handlePress = (button) => {
    setSelectedButton(button);
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        flexDirection: "row",
        paddingVertical: wp("2%"),
      }}
      horizontal={true}
    >
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(button)}
          style={{
            backgroundColor: selectedButton === button ? "blue" : "#B0D2FF",
            padding: wp("1.25%"),
            borderRadius: wp("1.25%"),
            marginRight: wp("4%"),
          }}
        >
          <Text style={{ color: selectedButton === button ? "white" : "blue" }}>
            {button}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default MyComponent;
