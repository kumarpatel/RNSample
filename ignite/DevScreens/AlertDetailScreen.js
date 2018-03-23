import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native'
import { Metrics, Images } from './DevTheme'
import FullButton from '../../App/Components/FullButton'

// For API
import API from '../../App/Services/Api'
import FJSON from 'format-json'

// Styles
import styles from './Styles/APITestingScreenStyles'

// API buttons here:
const endpoints = [
  { label: 'Github Root', endpoint: 'getRoot' },
  { label: 'Github Rate Limit', endpoint: 'getRate' },
  { label: 'Search User (gantman)', endpoint: 'getUser', args: ['gantman'] },
  { label: 'Search User (skellock)', endpoint: 'getUser', args: ['skellock'] }
]

export default class AlertDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerTitle: navigation.state.params.data };
  };
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container} ref='container'>
          <View style={{alignItems: 'center', paddingTop: 60}}>
            <Text style={styles.titleText}>{this.props.navigation.state.params.data}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
