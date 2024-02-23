import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

type PasswordInputProps = {
  placeholder: string;
};

const PasswordInput = (props: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
      }}
    >
      <TextInput
        secureTextEntry={!isPasswordVisible}
        style={{ flex: 1 }}
        placeholder={props.placeholder}
      />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <Icon name={isPasswordVisible ? "eye-slash" : "eye"} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
