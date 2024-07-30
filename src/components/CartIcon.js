import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { themeColor } from '../theme'

const CartIcon = () => {
    return (
        <View className='absolute z-50 bottom-5 w-full'>
            <TouchableOpacity className='flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg'
                style={{
                    backgroundColor: themeColor.bgColor(1)
                }}>
                <View className='p-2 px-4 rounded-full' style={{ backgroundColor: "orange" }}>
                    <Text className='text-white font-extrabold text-lg ' >3</Text>
                </View>
                <Text className='flex-1 text-center font-extrabold text-white text-lg'> View Cart</Text>
                <Text className=' font-extrabold text-white text-lg' >$ {23}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartIcon

const styles = StyleSheet.create({})