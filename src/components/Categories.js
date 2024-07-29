import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'

const Categories = () => {

    const [activeCategory, setActiveCategory] = useState(null)
    return (
        <View className='mt-4' >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className='overflow-visible'
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
            >
                {
                    categories.length > 0 ? categories.map((item) => {
                        let isActive = item.id === activeCategory
                        let bgClass = isActive ? 'bg-gray-400' : 'bg-gray-100'
                        let textClass = isActive ? 'text-lg text-gray-800 text-center' : 'text-gray-500 text-center'
                        return (
                            <View key={item.id} className='flex justify-center items-center mr-6' >
                                <TouchableOpacity onPress={() => setActiveCategory(item.id)}
                                    className={`rounded-full shadow p-1 ${bgClass}`}>
                                    <Image style={{ width: 70, height: 60 }}
                                        source={item.image} />
                                </TouchableOpacity>

                                <Text className={`${textClass}`}>{item.name}</Text>
                            </View>
                        )
                    }) : <Text>VERİLERE ŞU ANDA ERİŞİLEMİYOR</Text>
                }
            </ScrollView>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({})
