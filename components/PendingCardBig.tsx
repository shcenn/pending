import React from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

interface props {
    image: ImageSourcePropType;
    title: string;
    position: string;
    onPress?: () => void;
}

const PendingCard = ({ image, title, position, onPress }: props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8} 
            className="bg-gray-100  rounded-md overflow-hidden"
        >
            <View className='bg-white h-full w-64 rounded-md overflow-hidden p-4'>
                <View className='flex-1 bg-gray-100 rounded-md overflow-hidden'>
                    <Image
                        source={image}
                        className='w-full h-full rounded-md'
                        resizeMode='cover'
                        style={{ alignSelf: 'center' }}
                    />
                </View>
                <View className='h-auto zw-full px-2 py-3 flex-row justify-between items-center rounded-md mt-3'>
                    <View className='flex-row flex-1 items-center gap-3'>
                        <Text className='font-semibold text-sm'>{title}</Text>
                        <Text className='font-medium text-xs'>{position}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default PendingCard; 