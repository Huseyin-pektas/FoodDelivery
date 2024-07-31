import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CartScreen, DelieveryScreen, HomeScreen, OrderPrepairingScreen, ResturantScreen } from '../screens'


const Stack = createNativeStackNavigator()


const Routes = () => {
    return (
        <Stack.Navigator initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }} >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Resturant' component={ResturantScreen} />
            <Stack.Screen options={{
                presentation: "fullScreenModal"
            }} name='OrderPrepairing' component={OrderPrepairingScreen} />
            <Stack.Screen options={{
                presentation: "modal"
            }} name='Cart' component={CartScreen} />
            <Stack.Screen options={{
                presentation: "fullScreenModal"
            }} name='Delivery' component={DelieveryScreen} />
        </Stack.Navigator>
    )
}

export default Routes

const styles = StyleSheet.create({})