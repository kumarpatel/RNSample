import React from "react";
import * as ReactNavigation from "react-navigation";
import { connect } from "react-redux";
import AppNavigation from "./AppNavigation";
import { createRootNavigator } from "./Router";

// here is our redux-aware smart component
function ReduxNavigation(props) {
  const { dispatch, nav } = props;
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  });

  const Router = createRootNavigator();

  return <Router navigation={navigation} />;
}

const mapStateToProps = state => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
