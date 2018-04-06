import React from "react";
import {
  Platform,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import { Metrics, Images } from "./DevTheme";
import FullButton from "../../App/Components/FullButton";

// For API
import API from "../../App/Services/Api";
import FJSON from "format-json";

// Styles
import styles from "./Styles/APITestingScreenStyles";
import firebase from "react-native-firebase";

// API buttons here:
const endpoints = [
  { label: "Github Root", endpoint: "getRoot" },
  { label: "Github Rate Limit", endpoint: "getRate" },
  { label: "Search User (gantman)", endpoint: "getUser", args: ["gantman"] },
  { label: "Search User (skellock)", endpoint: "getUser", args: ["skellock"] }
];

export default class Home2Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      verificationCode: "",
      info: ""
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.tron.log("onAuthStateChanged");
      console.tron.log(user, true);
    });
  }
  _getSubmitAction() {
    console.tron.log("_getSubmitAction");
    console.tron.log(this.state.verificationCode, true);

    let confirmResult = this.props.navigation.state.params.confirmResult;
    confirmResult
      .confirm(this.state.verificationCode)
      .then(user => {
        // If you need to do anything with the user, do it here
        // The user will be logged in automatically by the
        // `onAuthStateChanged` listener we set up in App.js earlier
        console.tron.log("confirmed!!!!", true);
        console.tron.log(user, true);

        this.setState({
          info: `User Authenticated. ${String(user)}`
        });
      })
      .catch(error => {
        const { code, message } = error;
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error

        console.tron.log("error!!!!", true);
        console.tron.log(`Code: ${code} Error: ${message}`, true);
        this.setState({
          info: `Code: ${code} Error: ${message}`
        });
      });
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <TextInput
          ref={"textInput"}
          type={"TextInput"}
          underlineColorAndroid={"transparent"}
          autoCapitalize={"none"}
          autoCorrect={false}
          onChangeText={text => this.setState({ verificationCode: text })}
          placeholder={"000000"}
          keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
          returnKeyType="go"
          style={{
            textAlign: "center",
            borderWidth: 1,
            borderColor: "red",
            fontSize: 50,
            color: "black"
          }}
          autoFocus
          placeholderTextColor={"grey"}
          maxLength={6}
          onSubmitEditing={() => this._getSubmitAction()}
        />
        <View>
          <Text>{this.state.info}</Text>
        </View>
      </View>
    );
  }
}
