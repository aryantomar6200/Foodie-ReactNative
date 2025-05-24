import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { AuthStackParamsList } from '../routes/AuthStack';
import {AppwriteContext} from '../appwrite/AppwriteContext';
import Snackbar from 'react-native-snackbar';
import { SafeAreaView } from 'react-native-safe-area-context';



type LoginScreenProps = NativeStackScreenProps<AuthStackParamsList, 'Login'>


const Login = ({navigation}: LoginScreenProps) => {

  const {appwrite, setIsLoggedIn} = useContext(AppwriteContext)
  
  const[error, setError] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = () =>{
    if(email.length < 1 || password.length < 1){
      setError('All Fields are Required')
    }else{
      const user = {
        email,
        password
      }
      appwrite
      .login(user)
      .then(response => {
        if(response){
          setIsLoggedIn(true)
          Snackbar.show({
            text: 'Login Successfully',
            duration: Snackbar.LENGTH_SHORT
          })
        }
      })
      .catch(e => {
        console.log(e)
        setEmail('Incorrect email or Password')
      })
    }
  }

  return (
    <SafeAreaView>
      <Text>lundo loeo</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default Login