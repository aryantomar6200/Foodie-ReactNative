import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
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
import Signup from './screens/Signup';
import Router from './routes/Router';
import {AppStack} from './routes/AppStack';
import {AuthStack} from './routes/AuthStack';
import { AppwriteProvider } from './appwrite/AppwriteContext';



function App(): React.JSX.Element {

  return (

  <AppwriteProvider>
    <Router />
  </AppwriteProvider>

  );
}


export default App;
