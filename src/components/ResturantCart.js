import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColor } from '../theme';
import { useNavigation } from '@react-navigation/native';


const ResturantCart = ({ resturant }) => {
    const navigation = useNavigation()
    //console.log(resturant, "resturant");
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Resturant", { ...resturant })}>
            <View
                style={{
                    shadowColor: themeColor.bgColor(0.2),
                    shadowRadius: 7
                }}
                className='mr-6 rounded-3xl shadow-lg bg-white' >
                <Image className='h-36 w-80  rounded-t-3xl' source={resturant.image} />
                <View className='px-3 pb-4 space-y-2' >
                    <Text className=' text-lg font-bold' >{resturant.name} </Text>
                    <View className='flex-row items-center space-x-1' >
                        <Image source={require("../../assets/İcon/fullstar.png")} className='h-4 w-4' />
                        <Text className='text-xs' >
                            <Text className='text-green-700 font-bold'>{resturant.stars} </Text>
                            <Text className='text-gray-700' > ({resturant.reviews} reviews )
                                <Text className='font-semibold' >{resturant.categories} </Text>
                            </Text>
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-1" >
                        <Icon.MapPin height={15} width={15} color={"gray"} />
                        <Text className='text-xs' > Nearby . {resturant.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ResturantCart

const styles = StyleSheet.create({})