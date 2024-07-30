import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { featured } from '../constants';
import { themeColor } from '../theme';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';


const DelieveryScreen = () => {
    const navigation = useNavigation()
    const restaurant = featured[0]?.restaurants[0];
    //console.log(restaurant);
    return (
        <View className="flex-1">

            {/* harita kullanımı */}
            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                className="flex-1"
                mapType="standard"
            >

                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng,
                    }}
                    title={restaurant.name}
                    description={restaurant.description}
                    pinColor={themeColor.bgColor(1)}
                />
            </MapView>
            <View className="rounded-t-3xl -my-0 bg-white relative">
                <View className="flex-row justify-between px-5 pt-10">
                    <View>
                        <Text className="text-lg text-gray-700 font-semibold">Estimated Arrival</Text>
                        <Text className="text-2xl font-extrabold text-gray-700">20-30 Minutes</Text>
                        <Text className="mt-2 font-bold">Your order is own its way!</Text>
                    </View>
                    <Image
                        className="h-24 w-24"
                        source={require("../../assets/animations/Animation3.gif")} />
                </View>

                <View style={{ backgroundColor: themeColor.bgColor(0.8) }} className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
                    <View style={{ backgroundColor: "orange" }} className="rounded-full p-1">
                        <Image source={require(".././images/dishes/image1.jpeg")} className="h-16 w-16 rounded-full" />
                    </View>
                    <View className="flex-1 ml-3">
                        <Text className="font-extrabold text-xl text-white">Pektaş</Text>
                        <Text className="font-bold text-base text-white">Your Rider</Text>
                    </View>
                    <View className="flex-row items-center space-x-3 mr-3">
                        <TouchableOpacity className="bg-white p-2 rounded-full">
                            <Icon.Phone stroke={themeColor.bgColor(1)} strokeWidth={2} fill={themeColor.bgColor(1)} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")} className="bg-white p-2 rounded-full">
                            <Icon.X stroke={"red"} strokeWidth={4} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DelieveryScreen

const styles = StyleSheet.create({})