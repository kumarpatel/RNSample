// @flow
import { StyleSheet } from "react-native";

import { Colors } from "../../Themes";
import Metrics from "../../Themes/Metrics";

export default {
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: Colors.facebook,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.facebook
  },
  rightButtonStyle: {
    height: Metrics.navBarHeight - 15,
    width: Metrics.navBarHeight - 15,
    marginRight: 10
  },
  transparentNavBar: {
    backgroundColor: Colors.transparent,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.transparent
  },
  title: {
    color: Colors.snow
  },
  gameMatchupTitleText: {
    fontSize: 15,
    width: Metrics.screenWidth - 100
  },
  leftButton: {
    tintColor: Colors.snow
  },

  tabBarStyle: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.facebook,
    backgroundColor: Colors.facebook
  },

  bottomTabBarStyle: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.facebook,
    backgroundColor: Colors.facebook
  }
};
