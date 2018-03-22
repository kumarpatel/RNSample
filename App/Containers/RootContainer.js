import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'

// Styles
import styles from './Styles/RootContainerStyles'
import { createRootNavigator } from "../Navigation/Router";

class RootContainer extends Component {
  componentDidMount () {
    this.props.startup()
  }

  render () {
    const Router = createRootNavigator();

    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <Router />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
