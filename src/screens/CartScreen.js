import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { featured } from '../constants'
import { themeColor } from '../theme';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectResturant } from '../redux/resturantSlice';
import { removeFromCart, selectCartItem, selectCartTotal } from '../redux/CartSlice';

const CartScreen = () => {

    const navigation = useNavigation()
    const restaurant = useSelector(selectResturant)
    // console.log(restaurant, "resturanta ne var");
    const CartItems = useSelector(selectCartItem)
    const cartTotal = useSelector(selectCartTotal)
    const [groupedItems, setGroupedItems] = useState({})
    const dispatch = useDispatch()

    const deliveryFree = 2
    useEffect(() => {
        const items = CartItems.reduce((group, item) => {
            if (group[item.id]) {
                group[item.id].push(item)
            } else {
                group[item.id] = [item]
            }
            return group
        }, {})
        setGroupedItems(items)
    }, [CartItems])

    return (
        <View className="flex-1 bg-white">

            {/* back  button */}
            <View className="relative py-4 shadow-sm">

                <TouchableOpacity onPress={() => navigation.goBack()}
                    className='absolute rounded-full mt-3 ml-3 z-10 p-1 shadow-sm '
                    style={{
                        backgroundColor: themeColor.bgColor(1)
                    }}>
                    <Icon.ArrowLeft stroke={"white"} strokeWidth={3} />
                </TouchableOpacity>
                <View>
                    <Text className="text-center font-bold text-xl">Your Cart</Text>
                    <Text className='text-center text-gray-600'> {restaurant.name}</Text>
                </View>

                {/* delivery time */}

                <View className='flex-row px-4 items-center justify-between' style={{
                    backgroundColor: themeColor.bgColor(0.2)
                }}>
                    <Image source={require("../../assets/animations/Animation4.gif")}
                        style={{ width: 100, height: 100 }}
                    />
                    {/* <LottieView className=" rounded-full "
                        autoPlay
                        source={require("../../assets/animations/Animation3.gif")}
                        style={{ width: 150, height: 150 }}
                        loop
                    /> */}
                    <Text className="flex-1 pl-4"> Deliver in 20 - 30 Minutes</Text>
                    <TouchableOpacity>
                        <Text className="font-bold text-base" style={{ color: themeColor.text }}> Change</Text>
                    </TouchableOpacity>
                </View>
                {/* dishes */}
                <View
                    style={{
                        paddingBottom: 50
                    }}
                    className=" pt-5 mb-10"
                >
                    {
                        Object.entries(groupedItems).map(([key, items]) => {
                            let dish = items[0];
                            return (

                                <View
                                    key={key}
                                    className='bg-gray-50 flex-row items-center space-x-3 py-2 px-4 rounded-3xl shadow-md mt-3 mb-3' >
                                    <Text style={{ color: themeColor.text }} className='font-bold'>{items.length} X</Text>
                                    <Image className='rounded-3xl h-16 w-16'
                                        source={dish.image} />

                                    <Text className="flex-1 font-bold text-black">{dish.name}</Text>

                                    <Text className="font-semibold text-base ">Fiyat: ${dish.price}</Text>
                                    <TouchableOpacity
                                        onPress={() => dispatch(removeFromCart({ id: dish.id }))}
                                        style={{
                                            backgroundColor: themeColor.bgColor(1)
                                        }}
                                        className="rounded-full p-1">
                                        <Icon.Minus stroke={"white"} strokeWidth={2} height={20} width={20} />
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }


                </View>

                <View style={{
                    backgroundColor: themeColor.bgColor(0.2),

                }}
                    className="p-6 px-8 rounded-3xl space-y-4 mt-30">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-700"> SubTotal</Text>
                        <Text className="text-gray-700"> $ {cartTotal}</Text>

                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-700 font-bold"> Delivery Free</Text>
                        <Text className="text-gray-700 font-bold"> $ {deliveryFree}</Text>

                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-700 font-extrabold"> Order Total</Text>
                        <Text className="text-gray-700 font-extrabold"> $ {cartTotal + deliveryFree}</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("OrderPrepairing")}
                            style={{ backgroundColor: themeColor.bgColor(1) }}
                            className="p-3 rounded-full"
                        >
                            <Text className='text-center text-white font-bold text-lg'>Place Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default CartScreen
