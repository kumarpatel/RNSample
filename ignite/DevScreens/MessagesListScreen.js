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
  "Message 1",
  "Message 2",
  "Message 3",
  "Message 4",
  "Message 5",
  "Message 6",
  "Message 7",
  "Message 8"
];

export default class MessagesListScreen extends React.Component {
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
                this.props.navigation.navigate("MessageDetail", {
                  data: item
                })}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
