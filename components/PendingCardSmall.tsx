import React from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';

interface props {
    image: ImageSourcePropType;
    title: string;
    onPress?: () => void;
}

const PendingCardSmall = ({ image, title, onPress }: props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            className="bg-gray-100  rounded-md overflow-hidden"
        >
            <View className='bg-white h-full w-44 rounded-md overflow-hidden p-4'>

                <View className='flex-1 bg-gray-100 rounded-md overflow-hidden'>
                    <Image
                        source={image}
                        className='w-full h-full rounded-md'
                        resizeMode='contain'
                        style={{ alignSelf: 'center' }}
                    />
                </View>

                <View className='h-auto w-full px-2 py-3 flex-row justify-between items-center  rounded-md mt-3'>
                    <View className='flex-row flex-1 items-center gap-3'>
                        <Text className='font-semibold text-sm'>{title}</Text>
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    );
}

export default PendingCardSmall; 