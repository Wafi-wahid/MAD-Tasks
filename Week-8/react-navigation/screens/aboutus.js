import React from "react";
import { View, Text } from "react-native";
export default function aboutus({ route, navigation }) {
  return (
    <>
      <View>
        <Text>Hello I am about us page</Text>
        <Text>data received : {route.params.title}</Text>
      </View>
    </>
  );
}
