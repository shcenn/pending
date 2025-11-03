import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface props {
    title: string;
    // onSeeAll: () => void;
}

const PendingTitle = ({ title,  }: props) => {
    return (
        <View className='h-28 w-full px-7 flex-row justify-between items-center '>
            <Text className='font-semibold text-xl'>{title}</Text>
            <TouchableOpacity
                className='flex-row gap-3 items-center'
            >
                <Text className='font-medium text-xl'>View All</Text>
                <Feather name="arrow-right" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default PendingTitle