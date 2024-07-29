import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColor } from '../theme';


const DishesRow = ({ item }) => {
    return (
        <View className='flex-row items-center p-3 rounded-3xl mb-3 shadow-2xl mx-2 bg-white' >
            <Image style={{
                width: 120, height: 120
            }}
                className='rounded-3xl'
                source={item.image} />
            <View className='flex flex-1 space-y-3'>
                <View className="pl-3" >
                    <Text className='text-xl'>{item.name}</Text>
                    <Text className="text-gray-500">{item.description} </Text>
                </View>
                <View className="flex-row justify-between pl-3 items-center">
                    <Text className="text-gray-700 font-bold text-xl">
                        $ {item.price}
                    </Text>
                    <View className="flex-row items-center">
                        <TouchableOpacity style={{
                            backgroundColor: themeColor.bgColor(1)
                        }} className="p-1 rounded-full">
                            <Icon.Minus
                                height={20} width={20} stroke={"white"} />
                        </TouchableOpacity>
                        <Text className="px-3">{2}</Text>
                        <TouchableOpacity style={{
                            backgroundColor: themeColor.bgColor(1)
                        }} className="p-1 rounded-full">
                            <Icon.Plus
                                height={20} width={20} stroke={"white"} strokeWidth={2} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DishesRow
