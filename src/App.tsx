import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Restaurants from './screens/Restaurants';

export type RootStackParamList = {
  Home: undefined,
  Restaurants: {restaurant: Restaurants, }
  
}


const Stack = createNativeStackNavigator<RootStackParamList>()


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = "Home"        
      >
        
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Restaurants" 
          component={Restaurants} 
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
