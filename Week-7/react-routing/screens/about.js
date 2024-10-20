import React from "react";
import { View, Text, Button } from "react-native";
export default function AboutScreen({ navigation }) {
  return (
    <View>
      <Text>I am about us page</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
