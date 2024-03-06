import React from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, Platform, Linking, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const MapViewComponent = () => {
  const handleGetDirections = (latitude, longitude) => {
    const url = Platform.select({
      ios: `maps://app?saddr=&daddr=${latitude},${longitude}`,
      android: `geo:0,0?q=${latitude},${longitude}`,
    });

    if (url) {
      Linking.openURL(url);
    } else {
      console.error("Unable to get directions, unknown platform");
    }
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: -20.15,
        longitude: 28.58,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{ latitude: -20.15, longitude: 28.58 }}
        title={"Nelson mandela square"}
        description={"free slots"}
      >
        <Callout onPress={() => handleGetDirections(-20.15, 28.59)}>
          <Text>Nelson Mandela square</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{ latitude: -20.16, longitude: 28.68 }}
        title={"J Moyo street"}
        description={"free slots"}
      >
        <Callout onPress={() => handleGetDirections(-20.16, 28.6)}>
          <Text>J Moyo</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{ latitude: -20.17, longitude: 28.61 }}
        title={"J Nkomo street"}
        description={"free slots"}
      >
        <Callout onPress={() => handleGetDirections(-20.17, 28.61)}>
          <Text>J Nkomo Street</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{ latitude: -20.18, longitude: 28.58 }}
        title={"Fife Avenue"}
        description={"free slots"}
      >
        <Callout onPress={() => handleGetDirections(-20.18, 28.62)}>
          <Text>Fife Avenue</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{ latitude: -20.19, longitude: 28.63 }}
        title={"L Takawira Street"}
        description={"free slots"}
      >
        <Callout onPress={() => handleGetDirections(-20.19, 28.64)}>
          <Text>L Takawira Street</Text>
        </Callout>
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapViewComponent;
