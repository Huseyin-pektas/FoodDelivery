import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColor } from '../theme';
import Categories from '../components/Categories';
import { featured } from '../constants';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
    return (
        <SafeAreaView className="bg-white-400" >
            <StatusBar barStyle={"dark-content"} />
            <View className="flex-row item-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300 ">
                    <Icon.Search height={25} stroke={"gray"} width={25} />
                    <TextInput placeholder='resturantlar' className='ml-2 flex-1' />
                    <View className="flex-row items-center space-x-1 border-0  bprder-l-2 pl-2 border-l-gray-300" >
                        <Icon.MapPin stroke={"gray"} width={20} height={20} />
                        <Text className="text-gray-400" >New York, NYC</Text>
                    </View>

                </View>
                <View style={{ backgroundColor: themeColor.bgColor(1) }} className='p-3  rounded-full' >
                    <Icon.Sliders height={20} width={20} stroke={"white"} strokeWidth={2.5} />
                </View>
            </View>
            {/* main Content */}
            <ScrollView showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20,
                }}
            >


                {/* kategoriler kısmı */}
                <Categories />
                {/* featured    */}
                <View className='mt-5'>
                    {
                        featured.map((item, i) =>
                        (
                            <FeaturedRow key={i} item={item} />
                        )
                        )
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen