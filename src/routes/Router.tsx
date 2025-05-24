import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

//Stacks
import {AuthStack} from './AuthStack'
import {AppStack} from './AppStack'

import {AppwriteContext} from '../appwrite/AppwriteContext'
import Loading from '../components/Loading'
import { NavigationContainer } from '@react-navigation/native'


const Router = () => {

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const {appwrite, isLoggedIn, setIsLoggedIn} = useContext(AppwriteContext)

  useEffect(() => {

    appwrite
    .getCurrentUser()
    .then(response => {
      setIsLoading(false)
      if(response){
        setIsLoggedIn(true)
      }
    })
    .catch(_ => {
      setIsLoading(false)
      setIsLoggedIn(false)
    })

  }, [appwrite, isLoggedIn])

  if(isLoading){
    return <Loading />
  }
  

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Router