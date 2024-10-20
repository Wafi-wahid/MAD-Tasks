import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";

export default function State() {
  function handleSubmit() {
    console.log("clicked");
    setIsHungary(!ishungary);
  }

  function feedMyCat() {}

  function handleInput(arg) {}

  const [ishungary, setIsHungary] = useState(true);

  return (
    <View style={styles.container}>
      <Text onPress={feedMyCat}>
        I am a cat and I am{" "}
        {ishungary ? "hungary please feed me" : "full thanks for feeding ,me"}{" "}
      </Text>
      <TextInput
        placeholder="type here.."
        onChangeText={handleInput}
      ></TextInput>
      <Button onPress={handleSubmit} title="click me!" color="red"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
