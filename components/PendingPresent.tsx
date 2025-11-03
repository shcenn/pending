import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import PendingCardBig from './PendingCardBig';
import PendingTitle from './PendingTitle';

const PendingPresent = () => {
    const candidates = [
        {
            id: 1,
            title: 'John',
            position: 'Maintenance Mechanic',
            image: require("@/assets/images/john.png")
        },
        {
            id: 2,
            title: 'Ren',
            position: 'Janitor',
            image: require("@/assets/images/yutaka.png")
        },
        {
            id: 3,
            title: 'Lance',
            position: 'Food Service Worker',
            image: require("@/assets/images/lebron.png")
        }
    ];

    return (
        <View>
            <PendingTitle
                title='Pending Candidates'
                // onSeeAll={() => router.push('/pendingPresentAll')}
            />
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className='h-80'
                contentContainerStyle={{ gap: 20, paddingHorizontal: 24 }}
            >
                {candidates.length > 0 ? (
                    <>
                        {candidates.map((candidate) => (
                            <PendingCardBig
                                key={candidate.id}
                                title={candidate.title}
                                position={candidate.position}
                                image={candidate.image}
                            />
                        ))}

                        <View className='bg-white h-full w-64 rounded-md items-center gap-5 justify-center overflow-hidden p-4'>
                            <AntDesign name="profile" size={80} color="#6B6B6B" />
                            <Text className="text-buttongray">End of the list</Text>
                        </View>
                    </>
                ) : (

                    <View className='bg-white h-full w-64 rounded-md items-center gap-5 justify-center overflow-hidden p-4'>
                        <AntDesign name="profile" size={80} color="#6B6B6B" />
                        <Text className="text-buttongray">Empty list</Text>
                    </View>
                )}

            </ScrollView>
        </View>
    );
}

export default PendingPresent;