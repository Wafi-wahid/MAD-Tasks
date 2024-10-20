import { Text, View, StyleSheet, Image } from "react-native";

export default function Image() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>simple image from Google</Text>

      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2022/09/27/19/46/ai-generated-7483596_960_720.jpg",
        }}
        style={{ width: 400, height: 400 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
