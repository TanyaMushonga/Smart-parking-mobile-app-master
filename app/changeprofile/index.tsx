import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Textinput from "../components/textinput";
import {
  launchImageLibrary,
  ImageLibraryOptions,
} from "react-native-image-picker";

const index = () => {
  const [avatarSource, setAvatarSource] = useState<{
    uri: string | null;
  } | null>(null);

  const selectPhotoTapped = () => {
    const options: ImageLibraryOptions = {
      mediaType: "photo",
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.assets) {
        let source = { uri: response.assets[0].uri || null };
        setAvatarSource(source);
      }
    }).catch((error) => {
      console.log("ImagePicker Error: ", error);
    });
  };

  return (
    <ScrollView style={{}}>
      <StatusBar backgroundColor="#3d85c6" barStyle="light-content" />
      <View
        style={{
          width: "100%",
          height: hp("31%"),
          backgroundColor: "#3d85c6",
          alignItems: "center",
        }}
      >
        <View style={{ bottom: hp("-20%") }}>
          <Image
            source={avatarSource || require("./../../assets/profile.jpg")}
            style={{
              width: wp("35%"),
              height: wp("35%"),
              borderRadius: 100,
              borderWidth: 3,
              borderColor: "white",
            }}
          />
        </View>
      </View>
      <View style={{}}>
        <TouchableOpacity onPress={selectPhotoTapped}>
          <Image
            source={require("./../../assets/camera.png")}
            style={{
              width: wp("10%"),
              height: wp("10%"),
              borderRadius: 100,
              right: hp("-36%"),
              marginTop: hp("2%"),
            }}
          />
        </TouchableOpacity>
        <View style={{ padding: wp("3%"), marginVertical: hp("4%") }}>
          <Text style={{ paddingVertical: wp("2%") }}>New username</Text>
          <Textinput placeholder={"Enter new username"} />

          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: "blue",
              padding: wp("2%"),
              borderRadius: 10,
              marginTop: hp("3%"),
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default index;
