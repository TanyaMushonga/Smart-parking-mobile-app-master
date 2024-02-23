import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Parkingspace = () => {
  return (
    <View style={{ backgroundColor: "#fff", padding: 10, borderRadius: 5 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flex: 1, gap: 5 }}>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Text style={{ fontWeight: "bold" }}>Nelson mandela street</Text>
            <Text style={{ color: "green", fontWeight: "bold" }}>$2/hr</Text>
          </View>
          <Text style={{ color: "blue" }}>30 mins drive</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 5, height: 30 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#B0D2FF",
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 4,
            }}
          >
            <Text style={{ color: "blue" }}>Reserve</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#B0D2D2",
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 4,
            }}
          >
            <Text style={{ color: "green" }}>Drive</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Parkingspace;
