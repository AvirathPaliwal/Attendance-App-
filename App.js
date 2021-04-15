import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Header from './components/Appheader';
import Homescreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header/>
        <AppContainer/>
      </View>
    );
  }
}

 var AppNavigator = createSwitchNavigator({
    Homescreen:Homescreen,
    SummaryScreen:SummaryScreen
})
const AppContainer = createAppContainer(AppNavigator);
