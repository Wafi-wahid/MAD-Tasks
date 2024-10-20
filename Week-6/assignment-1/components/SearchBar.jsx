import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SearchBar() {
  return (
    <View style={styles.searchField}>
      <Icon name="search" size={20} />
      <TextInput
        style={styles.input}
        placeholder="Search Conditions or Doctors"
        placeholderTextColor="#777"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchField: {
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    width: "100%",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
});
