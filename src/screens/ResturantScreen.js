import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { themeColor } from '../theme';
import DishesRow from '../components/DishesRow';
import CartIcon from '../components/CartIcon';

const ResturantScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const item = route.params

    //console.log(item, "itemsss");
    return (
        <View>
            <CartIcon />
            <StatusBar barStyle={"light-content"} />
            <ScrollView showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                className='relative' >
                <View className='w-full h-72' >
                    <Image source={item.image} style={{ width: "100%", height: 300 }} resizeMode="center" />
                    <TouchableOpacity onPress={() => navigation.goBack()}
                        className='absolute top-14 bg-white rounded-full ml-2 p-1 shadow' >
                        <Icon.ArrowLeft stroke={themeColor.bgColor(1)} height={20} width={20} />
                    </TouchableOpacity>
                </View>
                <View className='-mt-12 bg-white pt-6'
                    style={{
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40
                    }}>
                    <View className='px-5'>
                        <Text className='text-3xl font-bold' >{item.name} </Text>
                        <View className='flex-row space-x-1 my-1' >
                            <View className='flex-row items-center space-x-1' >
                                <Image source={require("../../assets/İcon/fullstar.png")} className='h-4 w-4' />
                                <Text className='text-xs' >
                                    <Text className='text-green-700 font-bold'>{item.stars} </Text>
                                    <Text className='text-gray-700' > ({item.reviews} reviews )
                                        <Text className='font-semibold' >{item.categories} </Text>
                                    </Text>
                                </Text>
                            </View>
                            <View className="flex-row items-center space-x-1" >
                                <Icon.MapPin height={15} width={15} color={"gray"} />
                                <Text className='text-xs' > Nearby . {item.address}</Text>
                            </View>
                        </View>
                        <Text className='mt-2 text-gray-500' >
                            {item.description}
                        </Text>
                    </View>
                </View>
                <View className='pb-36 bg-white'>
                    <Text className='text-3xl font-bold  py-4 px-4'>Menü</Text>
                    {
                        item?.dishes?.map((item, i) => (
                            <DishesRow item={{ ...item }} key={i} />
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default ResturantScreen

const styles = StyleSheet.create({})