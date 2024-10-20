import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Opacity() {
  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity style={styles.shadow}>
        <Text>Touch to see Magic!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: "grey",
    padding: 10,
  },
  parentContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
