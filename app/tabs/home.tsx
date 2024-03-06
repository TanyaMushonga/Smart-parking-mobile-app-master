import { View, Text, ScrollView, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import SearchFilter from "../components/SearchFilter";
import Parkingslots from "../components/parkingslots";
import MapViewComponent from "../components/mapView";
import Headers from "../components/header";

const index = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, gap: wp("2.5%") }}>
        <View>
          <Headers />
        </View>
        <ScrollView>
          <SearchFilter />
        </ScrollView>
      </View>

      <View style={styles.maps}>
        <MapViewComponent />
      </View>

      <View style={{ gap: wp("2.5%"), marginBottom: hp("20%") }}>
        <Text style={{ fontWeight: "bold", fontSize: wp("4%") }}>
          Available parking space
        </Text>
        <View style={{ gap: wp("4%") }}>
          <Parkingslots street={"Nelson Mandel Street"} price={"$1.3/hr"} />
          <Parkingslots street={"Fife Avenue"} price={"$1.5/hr"} />
          <Parkingslots street={"J Nkomo Street"} price={"$1/hr"} />
          <Parkingslots street={"J Moyo"} price={"$1.5/hr"} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: wp("5%"),
    display: "flex",
    height: "auto",
  },
  maps: {
    backgroundColor: "#fff",
    height: hp("45.5%"),
    width: "100%",
    marginVertical: wp("4.5%"),
    borderRadius: wp("5.25%"),
  },
});

export default index;
