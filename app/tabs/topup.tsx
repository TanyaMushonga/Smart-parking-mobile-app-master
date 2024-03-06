import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Link } from "expo-router";
const money = require("./../../assets/money.png");
const paynow = require("./../../assets/paynow.png");
const avg = require("./../../assets/avg.png");

const topup = () => {
  return (
    <ScrollView style={{}}>
      <StatusBar backgroundColor="#3d85c6" barStyle="light-content" />
      <View
        style={{
          backgroundColor: "#2a3bbf",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          flex: 1,
        }}
      >
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <Link
            href="/tabs/accounts"
            style={{ right: wp("3%"), top: wp("3%") }}
          >
            <FontAwesome name="cog" size={wp("8%")} color="#fff" />
          </Link>
        </View>
        <View
          style={{
            padding: hp("3%"),
            marginTop: hp("3%"),
            justifyContent: "center",
            width: wp("100%"),
            alignItems: "center",
          }}
        >
          <Image
            source={require("./../../assets/profile.jpg")}
            style={{
              width: wp("30%"),
              height: wp("30%"),
              borderRadius: 100,
              borderWidth: 3,
              borderColor: "white",
            }}
          />
          <Text
            style={{
              marginTop: wp("2%"),
              fontSize: wp("4%"),
              color: "#fff",
              padding: wp("1%"),
              fontWeight: "bold",
            }}
          >
            TanyaMushonga
          </Text>
          <Text style={{ color: "#bcbcbc" }}>Balance: $10.00</Text>
        </View>
      </View>
      <View style={{ padding: wp("4%") }}>
        <View style={{ marginTop: hp("3%"), marginBottom: hp("15%") }}>
          <Text style={{ fontSize: wp("4%"), fontWeight: "700" }}>
            Your spending history
          </Text>
          <ScrollView
            style={{
              flexDirection: "row",
              gap: wp("3%"),
              marginVertical: wp("3%"),
            }}
            horizontal={true}
          >
            <View
              style={{
                backgroundColor: "#2a3bbf",
                padding: wp("3%"),
                borderRadius: wp("3%"),
                flex: 1,
                gap: wp("4%"),
                marginRight: wp("5%"),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: wp("4%"),
                }}
              >
                <Image
                  source={money}
                  alt="money"
                  style={{ width: wp("10%"), height: wp("10%") }}
                />
                <Text>Amount spend</Text>
              </View>

              <Text
                style={{
                  fontSize: wp("8%"),
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                $17.00
              </Text>
              <Text style={{ color: "#bcbcbc" }}>17/02/2024 - 24/02/2024</Text>
            </View>
            <View
              style={{
                backgroundColor: "blue",
                padding: wp("3%"),
                borderRadius: wp("3%"),
                flex: 1,
                gap: wp("4%"),
                marginRight: wp("5%"),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: wp("4%"),
                }}
              >
                <Image
                  source={avg}
                  alt="money"
                  style={{ width: wp("10%"), height: wp("10%") }}
                />
                <Text>Average parking fee</Text>
              </View>

              <Text
                style={{
                  fontSize: wp("8%"),
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                $1.20
              </Text>
              <Text style={{ color: "#bcbcbc" }}>17/02/2024 - 24/02/2024</Text>
            </View>
          </ScrollView>
          <View style={{ marginVertical: hp("3%") }}>
            <Text
              style={{
                fontSize: wp("4%"),
                fontWeight: "700",
                marginBottom: wp("3%"),
              }}
            >
              Topup your account
            </Text>
            <View>
              <Link href={"/paynow"} asChild>
                <TouchableOpacity>
                  <Image
                    source={paynow}
                    style={{ width: wp("90%"), height: wp("20%") }}
                  />
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </View>
      <View style={{ height: hp("10%") }}></View>
    </ScrollView>
  );
};

export default topup;
