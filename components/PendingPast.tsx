import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import PendingCardSmall from './PendingCardSmall';
import PendingTitle from './PendingTitle';


const PendingPast = () => {
  const candidates = [
    {
      id: 1,
      title: '',
      image: require('@/assets/images/wonyoung.png'),
    },
    {
      id: 2,
      title: 'Belle',
      image: require('@/assets/images/girl.jpg'),
    },
  ]

  return (
    <View>
      <PendingTitle
        title='Past Candidates'
        // onSeeAll={() => router.push('/pendingPastAll')}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='h-56'
        contentContainerStyle={{ gap: 20, paddingHorizontal: 24 }}
      >
        {candidates.length > 0 ? (
          <>
            {candidates.map((candidate) => (
              <PendingCardSmall
                key={candidate.id}
                title={candidate.title}
                image={candidate.image}
              />
            ))}
            <View className='bg-white justify-center items-center gap-4 h-full w-44 rounded-md overflow-hidden p-4'>
              <AntDesign name="profile" size={50} color="#6B6B6B" />
              <Text className='text-buttongray text-xs'>End of the list</Text>
            </View>
          </>
        ) : (
          <View className='bg-white justify-center items-center gap-4 h-full w-44 rounded-md overflow-hidden p-4'>
            <AntDesign name="profile" size={50} color="#6B6B6B" />
            <Text className='text-buttongray text-xs'>Empty list</Text>
          </View>
        )}

      </ScrollView>
    </View>
  )
}

export default PendingPast