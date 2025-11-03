import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


const PendingButton = () => {
    const router = useRouter();

    return (
        <TouchableOpacity
            onPress={() => router.push('/(tabs)/discover')}
            className='self-start gap-3 mx-6 my-20 px-4 py-3 flex-row items-center justify-between rounded-full  bg-white'
        >
            <Text className='text-lg text-buttongray'>Look for candidates</Text>
            <View>
                <AntDesign name="plus-circle" size={32} color="#6B6B6B" />
            </View>
        </TouchableOpacity>
    )
}

export default PendingButton