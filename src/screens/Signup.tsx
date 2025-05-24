import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { AuthStackParamsList } from '../routes/AuthStack';
import {AppwriteContext} from '../appwrite/AppwriteContext';
import Snackbar from 'react-native-snackbar';


type signupScreenProps = NativeStackScreenProps<AuthStackParamsList, 'Signup'>

const Signup = ({navigation}: signupScreenProps) => {

  const {appwrite, setIsLoggedIn} = useContext(AppwriteContext)

  const [error, setError] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')

  const handleSignup = ()=> {
    if(
      name.length < 1 ||
      email.length < 1 ||
      password.length < 1 ||
      repeatPassword.length < 1
    ){
      setError('All fields are required')
    }
    else if(password !== repeatPassword){
      setError('Password do not match')
    }else{
      const user = {
        name,
        email, 
        password
      }

      appwrite.createAccount(user)
      .then(response => {
        setIsLoggedIn(true)
        Snackbar.show({
          text: 'Singup successfully',
          duration: Snackbar.LENGTH_SHORT
        })
      })
      .catch( e => {
        console.log(e)
        setError(e.message)
      } )

    }   
  }

  return (
    <SafeAreaView >
      <View style = {styles.headcontainer}>
        <Text style = {styles.headingtxt}>
          Foodie
        </Text>

        
      </View>

      <View style = {styles.subheadingcontainer} > 
        <Text style = {styles.subheadingtxt}>
          Signup
        </Text>

        <Text style = {styles.subheadingdesc}>
          Enter your credentials to continue 
        </Text>
      </View>

      <View>
        <TextInput
          value={name}
          onChangeText={text => {
            setName(text)
            setError('')
          }}
          placeholder='Name'
          placeholderTextColor={"#AEAEAE"}

        />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headcontainer: {
    marginTop: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headingtxt: {
    fontSize: 54,
    color: '#f39c12',
    fontWeight: 'bold'
  },

  subheadingcontainer: {
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },

  subheadingtxt: {
    paddingTop: 12,
    fontSize: 28,
    fontWeight: '500'
  },

  subheadingdesc: {
    fontSize: 16,
    fontWeight: 600,
    paddingTop: 14
  }





})

export default Signup
