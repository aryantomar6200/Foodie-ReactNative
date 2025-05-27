import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Signup from '../screens/Signup'
import Login from '../screens/Login'

import { createNativeStackNavigator } from '@react-navigation/native-stack'


export type AuthStackParamsList = {
  Login: undefined
  Signup: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamsList>()


export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Signup' screenOptions={{ headerShown: false }}>

      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />


    </Stack.Navigator>
  )
}


