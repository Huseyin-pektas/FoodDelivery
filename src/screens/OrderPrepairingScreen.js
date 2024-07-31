import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const OrderPrepairingScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        //console.log('Setting timeout...');

        const timer = setTimeout(() => {
            navigation.navigate("Delivery")
            //console.log('Navigating to Delivery...');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation])
    return (
        <View
            className=" flex-1 bg-white justify-center items-center"
        >
            <Image source={require("../images/resturants/Delivery.gif")}
                className="w-80 max-h-full"
                resizeMode="center"
            />

        </View>
    )
}

export default OrderPrepairingScreen
