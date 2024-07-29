import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { themeColor } from '../theme'
import ResturantCart from './ResturantCart'

const FeaturedRow = ({ item }) => {
    return (
        <View>
            <View className='flex-row px-4 justify-between items-center ml-5' >
                <View>
                    <Text className='text-lg font-bold' >{item.title} </Text>
                    <Text className='text-xs  text-gray-600' >{item.description} </Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: themeColor.text, fontWeight: "bold" }}>See All</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className='overflow-visible py-5 ml-5'
            >
                {
                    item.restaurants.map((resturant, i) => (
                        <ResturantCart resturant={resturant} key={i} />
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default FeaturedRow

const styles = StyleSheet.create({})