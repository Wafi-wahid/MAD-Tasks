// HomeScreen.js
import React from "react";
import { Button, View, Text } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="login to get start"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}
