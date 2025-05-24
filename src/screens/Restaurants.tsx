import { StyleSheet, Text, View, Image, ScrollView, Pressable, FlatList, TouchableOpacity } from 'react-native'
import React, { use, useState } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamsList } from  '../routes/AppStack'
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 




type RestaurantsScreenProps = NativeStackScreenProps<AppStackParamsList, 'Restaurants'>

export default function Restaurants({route}: RestaurantsScreenProps) {

  const {restaurant} = route.params
  const categories = Object.keys(restaurant.menu);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const items = restaurant.menu[selectedCategory].items;

  return (
    <SafeAreaView>
      
      <View style = {styles.container}>

        <View>
          <Text style={styles.welcomeTxt}>Welcome to <Text style={styles.restaurantName}>{restaurant.name}</Text></Text>
        </View>

        <Image 
          source={{ uri: restaurant.image }} 
          style={{ width: '100%', height: 270, borderRadius: 20, marginTop: 15, marginBottom: 10,}}
        />


        <View style = {styles.addresscontainer}>
          <FontAwesome name='map-pin' size={22} />
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#2c3e50', paddingTop:3}}>{restaurant.address}</Text>
        </View>

        <View style = {styles.phonecontainer}>
          <FontAwesome name='phone' size={20} />
          <Text style={{fontSize: 13, fontWeight: 'bold', color: '#2c3e50', paddingTop:-1}}>{restaurant.phone}</Text>
        </View>
       
        <View style={styles.categorycontainer}>

            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', gap: 10 }}>
              
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>

                {categories.map((category) => (
                  <TouchableOpacity
                    key={category}
                    onPress={() => setSelectedCategory(category)}
                    style={{
                      backgroundColor: selectedCategory === category ? '#f39c12' : '#eee',
                      padding: 20,
                      marginRight: 10,
                      borderRadius: 20,
                      borderWidth: selectedCategory === category ? 0 : 1,
                      borderColor: selectedCategory === category ? '#f39c12' : '#ccc',
                    }}
                  >

                    <Text style={{ color: selectedCategory === category ? '#fff' : '#2c3e50', fontWeight: 'bold' }}>
                      {category}
                    </Text>

                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

      {/* Items List */}
            <View>
              <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.itemContainer}>

                    <Image source={{ uri: item.image }} style={{ width: 80, height: 80, borderRadius: 10 }} />

                    <View style={{ marginLeft: 12, flex: 1 }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{item.name}</Text>

                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 8, paddingRight: 15 }}>
                        <Text style={styles.priceTxt}>{item.price}</Text>
                        <Text style={styles.priceTxt}>⭐ {item.rating}</Text>
                      </View>
                      
                    </View>

                  </View>
                )}
              />
            </View>
    </View>


            
        
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 20,
  },
  welcomeTxt: {
    paddingTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  restaurantName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f39c12',
  },
  addresscontainer: {
    marginTop:10,
  
    flexDirection: 'row',
    gap: 10
  },
  phonecontainer: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 8
  },

  catText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    paddingTop: 24,
  },

  categorycontainer: {
    flex: 1,
    padding: 10,
    marginTop: 20,
  },
  
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  priceTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2c3e50',
  }

})