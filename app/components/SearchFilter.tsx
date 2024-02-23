import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SearchFilter = () => {
  return (
    <ScrollView style={{}}>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{ backgroundColor: "#B0D2FF", padding: 5, borderRadius: 7 }}
        >
          <Text style={{ color: "blue" }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "#B0D2FF", padding: 5, borderRadius: 5 }}
        >
          <Text style={{ color: "blue" }}>Paid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "#B0D2FF", padding: 5, borderRadius: 5 }}
        >
          <Text style={{ color: "blue" }}>None Paid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "#B0D2FF", padding: 5, borderRadius: 5 }}
        >
          <Text style={{ color: "blue" }}>CBD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "#B0D2FF", padding: 5, borderRadius: 5 }}
        >
          <Text style={{ color: "blue" }}>Avenues</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SearchFilter;
