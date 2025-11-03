import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Header = () => {
  return (
    <View className="absolute top-0 w-full flex-row justify-between px-7 py-5 bg-background z-50">
      <Text className="text-black text-4xl font-bold">JobSwipe</Text>
      <TouchableOpacity >
        <FontAwesome6 name="bars" size={24} color="black"  />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
