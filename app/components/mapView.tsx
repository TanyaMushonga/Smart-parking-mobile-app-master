import React from "react";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";

const MapViewComponent = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: -20.15,
        longitude: 28.58,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapViewComponent;
