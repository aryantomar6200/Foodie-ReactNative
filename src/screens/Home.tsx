import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, FlatList, Pressable, ScrollView } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RESTAURANTS_LIST } from '../data/constants'
import { AppStackParamsList } from '../routes/AppStack'
import { SafeAreaView } from 'react-native-safe-area-context'
import RestaurantItem from '../components/RestaurantItem'
import { AppwriteContext } from '../appwrite/AppwriteContext'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Snackbar from 'react-native-snackbar'



type HomeScreenProps = NativeStackScreenProps<AppStackParamsList, 'Home'>

type userObj = {
  name: string;
  email: string;
}

export default function Home({ navigation }: HomeScreenProps) {

  const { appwrite, setIsLoggedIn } = useContext(AppwriteContext)
  const [searchQuery, setSearchQuery] = useState('');
  const [userData, setUserData] = useState<userObj>();

  const filteredRestaurants = RESTAURANTS_LIST.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogout = () => {
    appwrite.logout()
      .then(() => {
        setIsLoggedIn(false);
        Snackbar.show({
          text: 'Logged out successfully',
          duration: Snackbar.LENGTH_SHORT
        })
      })
      .catch(error => {
        console.error('Logout failed:', error);
        Snackbar.show({
          text: 'Logout failed',
          duration: Snackbar.LENGTH_SHORT
        })
      });
  }

  useEffect(() => {

    appwrite.getCurrentUser()
      .then(response => {
        if (response) {
          const user: userObj = {
            name: response.name,
            email: response.email,
          }
          setUserData(user);
        }
      })

  }, [appwrite])


  return (
    <SafeAreaView>
      <ScrollView>
        <View >

          <View style={styles.navcontainer}>
            <FontAwesome name="user" size={43} color="#2c3e50" />
            <Pressable
              onPress={handleLogout}
            >
              <FontAwesome name="bell" size={36} color="#2c3e50" />
            </Pressable>

          </View>

          <View style={styles.headingcontainer}>
            <Text style={styles.starterText}>Hello! {userData?.name}</Text>
            <Text style={styles.headingText}>Order Anything, Anywhere</Text>
            <Text style={styles.headingText}>With <Text style={{ color: '#f39c12' }}>Foodie..</Text></Text>
          </View>

          <View style={styles.searchcontainer}>
            <TextInput
              placeholder='Search any restaurant'
              placeholderTextColor={'gray'}
              style={styles.Searchbar}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />

            <View style={{ position: 'absolute', top: "36%", left: "74%", backgroundColor: "white", borderRadius: 20, padding: 10 }}>
              <FontAwesome name="search" size={20} color="#2c3e50" />
            </View>

          </View>


          <Text style={styles.restText}>Restaurants</Text>


          <View>
            <FlatList
              data={RESTAURANTS_LIST}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <Pressable onPress={() => {
                  navigation.navigate('Restaurants', {
                    restaurant: item
                  });
                }}>
                  <RestaurantItem restaurant={item} />
                </Pressable>
              )}
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  navcontainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 50,
    height: 100,
    alignItems: 'center',

  },
  headingcontainer: {
    padding: 10,
    paddingLeft: 30,
  },
  headingText: {
    color: '#2c3e50',
    fontSize: 32,
    fontWeight: 'bold',
  },
  starterText: {
    color: '#2c3e50',
    fontSize: 16,
    fontWeight: 'bold',

  },

  searchcontainer: {
    flexDirection: 'row',
  },

  Searchbar: {
    backgroundColor: '#ecf0f1',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 30,
    marginTop: 20,
    fontSize: 18,
    color: '#2c3e50',
    elevation: 5,
    paddingLeft: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    width: '80%',
    height: 50,

  },

  restText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 35,
    marginLeft: 30,
  }

})