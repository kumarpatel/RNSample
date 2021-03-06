import React from "react";
import { ScrollView, View, Text, Button, Image } from "react-native";
import { Metrics, Images } from "./DevTheme";
import FullButton from "../../App/Components/FullButton";

// For API
import API from "../../App/Services/Api";
import FJSON from "format-json";

// Styles
import styles from "./Styles/APITestingScreenStyles";

const data = ["Privacy Policy", "Terms of Service", "Profile", "Account Summary"];

export default class SettingsScreen extends React.Component {
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
          {data.map(item => (
            <Button
              key={item}
              title={item}
              onPress={() => {
                //this.props.navigation.navigate("TabsNavigatorExample");
              }}
            />
          ))}

          <Button
            title={"Logout"}
            onPress={() => this.props.navigation.navigate("LandingScreen")}
          />
        </ScrollView>
      </View>
    );
  }
}
