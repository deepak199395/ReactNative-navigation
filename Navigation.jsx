React native important commands 


1.  "adb" (Android Debug Bridge) 
brew install android-platform-tools
adb version
export PATH=$PATH:/usr/local/opt/android-platform-tools/bin
export PATH=$PATH:/path/to/platform-tools

========================================================================
2.React navigation.

npm install @react-navigation/native

npm install react-native-screens react-native-safe-area-context

npm install @react-navigation/native-stack

npm install @react-navigation/stack




import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
const Stack=createNativeStackNavigator()

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='' >
    <Stack.Screen/>
    </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default App

const styles = StyleSheet.create({})

========================================================================inlist setting
npm install --save-dev @babel/preset-env @babel/preset-react

In .eslintrc.js

module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    // Add or override rules here
    "babel/require-config-file": false

  },
};


