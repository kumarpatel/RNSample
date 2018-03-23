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

export default class Schedules2Screen extends React.Component {

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container} ref='container'>
          <View style={{alignItems: 'center', paddingTop: 60}}>
            <Image source={Images.api} style={styles.logo} />
            <Text style={styles.titleText}>API</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Testing API with Postman or APIary.io verifies the server works.
              The API Test screen is the next step; a simple in-app way to verify and debug your in-app API functions.
            </Text>
            <Text style={styles.sectionText}>
              Create new endpoints in Services/Api.js then add example uses to endpoints array in Containers/APITestingScreen.js
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
