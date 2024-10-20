import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";
import globleStyles from "../assets/styles";

const App = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("About", { title: "hello" })}
      >
        <Text style={globleStyles.txt}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", // Vertical layout
  },
  blueHalf: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#002b5c", // Dark blue background
  },
  whiteHalf: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white", // White background
  },
  iconContainer: {
    backgroundColor: "white", // Green background for the icon
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 40,
    color: "#002b5c",
    marginVertical: 20,
    textAlign: "start",
  },
  button: {
    backgroundColor: "green", // Button color
    padding: 10,
    borderRadius: 20,
    marginLeft: 140,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
});

export default App;
