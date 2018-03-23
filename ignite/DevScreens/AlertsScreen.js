import React from "react";
import { ScrollView, View, Text, Button, Image } from "react-native";
import { Metrics, Images } from "./DevTheme";
import FullButton from "../../App/Components/FullButton";

// For API
import API from "../../App/Services/Api";
import FJSON from "format-json";

// Styles
import styles from "./Styles/APITestingScreenStyles";

const data = [
  "Alert 1",
  "Alert 2",
  "Alert 3",
  "Alert 4",
  "Alert 5",
  "Alert 6",
  "Alert 7",
  "Alert 8"
];

export default class AlertsScreen extends React.Component {
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
              onPress={() =>
                this.props.navigation.navigate("AlertDetail", {
                  data: item
                })}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
