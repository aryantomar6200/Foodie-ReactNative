import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Home from '../screens/Home'
import Restaurants from '../screens/Restaurants'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


export type AppStackParamsList = {
  Home: undefined,
  Restaurants: { restaurant: Restaurants, }
}


const Stack = createNativeStackNavigator<AppStackParamsList>()

export const AppStack = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='Restaurants' component={Restaurants} options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}


