import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, ResturantScreen } from '../screens'


const Stack = createNativeStackNavigator()


const Routes = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Resturant' component={ResturantScreen} />
        </Stack.Navigator>
    )
}

export default Routes

const styles = StyleSheet.create({})