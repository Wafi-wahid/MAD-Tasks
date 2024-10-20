import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import State from "./components/State";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Different Boxes!</Text>
      <View style={styles.box1}>
        <Icon name="search" size={30} color="#900"></Icon>
      </View>
      <View style={styles.box2}>
        <State></State>
      </View>
      <View style={styles.box3}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  box1: {
    borderColor: "yellow",
    width: 100,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box2: {
    borderColor: "black",
    width: 100,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
  },
  box3: {
    borderColor: "purple",
    borderRadius: 10,
    borderWidth: 1,
    width: 100,
    height: 50,
  },
});
