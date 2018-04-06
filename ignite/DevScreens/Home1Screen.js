import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button
} from "react-native";
import { Metrics, Images } from "./DevTheme";

import PhoneInput from "react-native-phone-input";
import CountryPicker from "react-native-country-picker-modal";
import firebase from "react-native-firebase";
// Styles
import styles from "./Styles/APITestingScreenStyles";

export default class Home1Screen extends React.Component {
  constructor(props) {
    super(props);
    this.onPressFlag = this.onPressFlag.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.updateInfo = this.updateInfo.bind(this);

    this.state = {
      cca2: "US",
      valid: "",
      type: "",
      value: ""
    };
  }

  updateInfo() {
    this.setState({
      valid: this.phone.isValidNumber(),
      type: this.phone.getNumberType(),
      value: this.phone.getValue()
    });
  }

  componentDidMount() {
    this.setState({
      pickerData: this.phone.getPickerData()
    });
  }

  onPressFlag() {
    this.countryPicker.openModal();
  }

  selectCountry(country) {
    this.phone.selectCountry(country.cca2.toLowerCase());
    this.setState({ cca2: country.cca2 });
  }

  onLoginOrRegister = () => {
    const { value } = this.state;
    console.tron.log(this.state.value);
    firebase
      .auth()
      .signInWithPhoneNumber(value)
      .then(confirmResult => {
        console.tron.log("confirmResult");
        console.tron.log(confirmResult);

        // This means that the SMS has been sent to the user
        // You need to:
        //   1) Save the `confirmResult` object to use later
        // this.setState({ confirmResult });
        this.props.navigation.navigate("Home2Screen", {
          confirmResult: confirmResult
        });
        //   2) Hide the phone number form
        //   3) Show the verification code form
      })
      .catch(error => {
        console.tron.log("error");
        // console.tron.log(error);
        const { code, message } = error;
        console.tron.log(`Code: ${code} Error: ${message}`, true);

        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
  };

  onVerificationCode = () => {
    const { confirmResult, verificationCode } = this.state;
    confirmResult
      .confirm(verificationCode)
      .then(user => {
        // If you need to do anything with the user, do it here
        // The user will be logged in automatically by the
        // `onAuthStateChanged` listener we set up in App.js earlier
      })
      .catch(error => {
        const { code, message } = error;
        // For details of error codes, see the docs
        // The message contains the default Firebase string
        // representation of the error
      });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container} ref="container">
          <View style={styles.section}>
            <PhoneInput
              ref={ref => {
                this.phone = ref;
              }}
              onPressFlag={this.onPressFlag}
              onChangePhoneNumber={this.updateInfo}
            />

            <CountryPicker
              ref={ref => {
                this.countryPicker = ref;
              }}
              onChange={value => this.selectCountry(value)}
              translation="eng"
              cca2={this.state.cca2}
            >
              <View />
            </CountryPicker>
          </View>
          <Button onPress={() => this.onLoginOrRegister()} title="Login" />
        </ScrollView>
      </View>
    );
  }
}
