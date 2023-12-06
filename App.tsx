import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './src/AppNavigator'
import Splash from './src/screens/Splash'
import MainContainer from './src/MainContainer'
import { Provider } from 'react-redux'
import Store from './src/redux/store/Store'

const App = () => {
  
  return (
    <Provider store={Store}>
    <MainContainer />
    </Provider>
    
    
    
  )
}

export default App

const styles = StyleSheet.create({})