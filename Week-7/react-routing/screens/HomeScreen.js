// HomeScreen.js

import { Button, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

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
