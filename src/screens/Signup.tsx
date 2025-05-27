import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamsList } from '../routes/AuthStack';
import { AppwriteContext } from '../appwrite/AppwriteContext';
import Snackbar from 'react-native-snackbar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



type signupScreenProps = NativeStackScreenProps<AuthStackParamsList, 'Signup'>

const Signup = ({ navigation }: signupScreenProps) => {

  const { appwrite, setIsLoggedIn } = useContext(AppwriteContext)

  const [error, setError] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  

  const handleSignup = () => {
    if (
      name.length < 1 ||
      email.length < 1 ||
      password.length < 1
    ) {
      setError('All fields are required')
    } else {
      const user = {
        name,
        email,
        password
      }

      appwrite.createAccount(user)
        .then(response => {
          if(response){
            setIsLoggedIn(true)
            Snackbar.show({
              text: 'Signup successfully',
              duration: Snackbar.LENGTH_SHORT
          })
          }
        })
        .catch(e => {
          console.log(e)
          setError(e.message)
        })

    }
  }

  return (
    <SafeAreaView >
      <View style={{ backgroundColor: '#f2f2f2' }}>

        <View style={styles.headcontainer}>
          <Image 
            source={require('../assets/Foodiee.png')}
            style={styles.headingimg}
            resizeMode='contain'
          />
        </View>

        <View style={styles.subheadingcontainer} >
          <Text style={styles.subheadingtxt}>
            Signup
          </Text>

          <Text style={styles.subheadingdesc}>
            Enter your credentials to continue
          </Text>
        </View>

        <View style={styles.txtcontainer}>

          <View style={styles.singleinputfield}>
            <FontAwesome name="user" size={30} style={styles.iconstyle} />
            <TextInput
              style={styles.textbox}
              value={name}
              onChangeText={text => {
                setName(text)
                setError('')
              }}
              placeholder='Name'
              placeholderTextColor={"#AEAEAE"}

            />
          </View>

          <View style={styles.singleinputfield}>
            <FontAwesome name="envelope" size={25} style={styles.iconstyle} />
            <TextInput
              style={styles.textbox}
              value={email}
              onChangeText={text => {
                setEmail(text)
                setError('')
              }}
              placeholder='Email'
              placeholderTextColor={"#AEAEAE"}

            />
          </View>

          <View style={styles.singleinputfield}>
            <FontAwesome name="lock" size={33} style={styles.iconstyle} />
            <TextInput
              style={styles.textbox}
              value={password}
              secureTextEntry={true}
              onChangeText={text => {
                setPassword(text)
                setError('')
              }}
              placeholder='Password'
              placeholderTextColor={"#AEAEAE"}

            />
          </View>

        </View>

        {error ? <Text style={styles.error}>{error}</Text> : null}



        <Pressable
          onPress={handleSignup}
          style = {{
            width: '50%',
            alignSelf: 'center',
            backgroundColor: '#f39c12',
            borderRadius: 10,
            paddingVertical: 12,
            paddingHorizontal: 20,
            alignItems: 'center',
            marginTop: error ? 20 : 33
          }}
        >
          <Text style={styles.signupbtnText}>Signup</Text>
        </Pressable>

        <View style={styles.footertxtcontainer}>
          <Text style={styles.footertxt}>Already have an account? </Text>
          <Pressable
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.footertxtlink}>
              Login
            </Text>
          </Pressable>
        </View>

        <View>
          <Image
            source={require('../assets/signupfood.png')}
            style={styles.image}
            resizeMode='contain'
          />
        </View>


      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  safeAreaView: {
    flex: 1,
    backgroundColor: '#00000',
  },

  headcontainer: {
    marginTop: 47,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headingimg: {
    width: 250,
    height: 200,
    
  },

  subheadingcontainer: {
    marginTop: -10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  subheadingtxt: {
    paddingTop: 12,
    fontSize: 31,
    fontWeight: '500'
  },

  subheadingdesc: {
    fontSize: 15,
    fontWeight: 500,
    paddingTop: 14
  },

  txtcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,

  },

  iconstyle: {
    color: '#2c3e50',
    paddingLeft: 10,
    paddingRight: 7,

  },

  singleinputfield: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 17,
    width: '100%',

  },

  textbox: {
    width: '70%',
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,

  },

  error: {
    color: '#c0392b',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 7,
    paddingHorizontal: 20
  },

  signupbtnText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold'
  },

  footertxtcontainer: {
    gap: 5,
    color: '#2c3e50',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    paddingBottom: 10
  },

  footertxt: {
    fontSize: 15,
    color: '#2c3e50',
  },

  footertxtlink: {
    fontSize: 16,
    color: '#f39c12',
    fontWeight: 'bold',
  },

  image: {
    width: '100%',
    height: 360,
    borderRadius: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  
  }





})

export default Signup
