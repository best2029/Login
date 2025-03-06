import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { CONSTANTS } from '@/constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

const Page = () => {
    return (
        <View className="flex-1">
            <LinearGradient
                colors={[
                    CONSTANTS.colors.backgroundGradientStart,
                    CONSTANTS.colors.backgroundGradientMiddle,
                    CONSTANTS.colors.backgroundGradientEnd,
                ]}
                style={{ flex: 1, width: "100%", height: "100%", position: "absolute" }}
            />
            <SafeAreaView>
                <View className="pt-20 px-page">
                    <View className="rounded-full overflow-hidden self-center">
                        <Image
                            source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
                            style={{ width: 95, height: 95, }}
                        />
                    </View>
                    <Text className="text-white font-bold text-center font-sans text-title mt-[50px]"
                    >Welcome Back!</Text>
                    <Text className="text-white text-center mt-3">
                        Please Log into your existing account
                    </Text>
                    <View className="mt-8 border-2 border-white rounded-full p-6">
                        <TextInput
                            placeholder="Your Email"
                            placeholderTextColor="rgba(255, 255, 255, 0.6)"
                            className="text-white font-sans text-lg"
                        />
                    </View>
                    <View className="mt-6 border-2 border-white rounded-full p-6">
                        <TextInput
                            placeholder="Your Password"
                            placeholderTextColor="rgba(255, 255, 255, 0.6)"
                            className="text-white font-sans text-lg"
                        />
                        
                    </View>
                    <TouchableOpacity className="mt-6 bg-green-500 rounded-full p-4">
                            <Text className="text-white text-lg text-center">Log in</Text>
                        </TouchableOpacity>

                </View>
            </SafeAreaView>
        </View>
    )
}

export default Page;