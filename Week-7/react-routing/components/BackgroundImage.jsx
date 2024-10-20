import { Text, StyleSheet, ImageBackground } from "react-native";

export default function BackgroundImage() {
  return (
    <>
      <ImageBackground
        source={{
          uri: "https://photutorial.com/wp-content/uploads/2023/04/Featured-image-AI-image-generators-by-Midjourney.png",
        }}
        resizeMode="cover"
        style={styles.container}
      >
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  text: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
