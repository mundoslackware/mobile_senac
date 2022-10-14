import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar  backgroundColor='#FF7E01' barStyle='light-content' translucent={false} />
      <Routes /> 
    </NavigationContainer>    
  )
}
