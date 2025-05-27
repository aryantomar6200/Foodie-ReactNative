import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { PropsWithChildren } from "react"
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type RestaurantItemProps = PropsWithChildren<{
    restaurant: Restaurants
}>


const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {

    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: restaurant.image }} style={styles.image} />
            </View>

            <View>
                <Text style={styles.name}>{restaurant.name}</Text>

                <Text style={styles.openhours}> <Text style={{ fontWeight: 'bold', color: '#2c3e50', fontSize: 15 }}>Open Hours -</Text> {restaurant.openHours}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {

        justifyContent: 'space-between',
        padding: 10,
        marginTop: 20,
        marginHorizontal: 20,
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

    image: {
        width: '100%',
        height: 190,
        resizeMode: 'cover',
        alignSelf: 'center',
    },

    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginTop: 10,
    },

    address: {
        fontSize: 15,
        marginTop: 5,
        fontWeight: 'semibold',
        fontFamily: 'Arial',
    },

    openhours: {
        fontSize: 14,
        color: '#7f8c8d',
        marginTop: 5,
    }
})

export default RestaurantItem;