import React from "react";
import { ScrollView, View, Text, Button, Image } from "react-native";
import { Metrics, Images } from "./DevTheme";
import FullButton from "../../App/Components/FullButton";

// For API
import API from "../../App/Services/Api";
import FJSON from "format-json";

// Styles
import styles from "./Styles/APITestingScreenStyles";

// API buttons here:
const endpoints = [
  { label: "Github Root", endpoint: "getRoot" },
  { label: "Github Rate Limit", endpoint: "getRate" },
  { label: "Search User (gantman)", endpoint: "getUser", args: ["gantman"] },
  { label: "Search User (skellock)", endpoint: "getUser", args: ["skellock"] }
];

export default class LandingScreen extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView
          style={[styles.container]}
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
          ref="container"
        >
          <Button
            title="Tabs Example"
            onPress={() =>
              this.props.navigation.navigate("TabsNavigatorExample")}
          />
          <Button
            title="Drawer Example"
            onPress={() =>
              this.props.navigation.navigate("DrawerNavigatorExample")}
          />
        </ScrollView>
      </View>
    );
  }
}
