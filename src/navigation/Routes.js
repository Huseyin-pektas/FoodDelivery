import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CartScreen, HomeScreen, ResturantScreen } from '../screens'


const Stack = createNativeStackNavigator()


const Routes = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Resturant' component={ResturantScreen} />
            <Stack.Screen options={{
                presentation: "modal"
            }} name='Cart' component={CartScreen} />
        </Stack.Navigator>
    )
}

export default Routes

const styles = StyleSheet.create({})