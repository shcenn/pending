import Header from "@/components/Header";
import PendingButton from "@/components/PendingButton";
import PendingPast from "@/components/PendingPast";
import PendingPresent from "@/components/PendingPresent";
import React from "react";
import { ScrollView, View } from "react-native";

const Pending = () => {
  return (
    <View className="flex-1">
      <Header />
      <ScrollView
        className="flex-1 mt-16"
        showsVerticalScrollIndicator={false}

      >
        <PendingPresent />
        <PendingPast />
        <PendingButton />

      </ScrollView>


    </View>
  );
};

export default Pending;
