import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./components/SearchBar.jsx";
import DoctorCard from "./components/DoctorCard.jsx";
import ContextButton from "./components/ContextButton.jsx";
export default function App() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Text style={styles.header}>Let's Find Your Doctor!</Text>
      <View style={styles.cardContainer}>
        <DoctorCard
          name="Dr John Smith"
          specialization="Dermatologist"
          rating="4.9"
        />
        <DoctorCard
          name="Dr. Anna Dinn"
          specialization="Psychologist"
          rating="4.9"
        />
        <DoctorCard
          name="Dr Angela Rayez"
          specialization="Therapist"
          rating="4.8"
        />

        <DoctorCard
          name="Dr Chris Bronte"
          specialization="Dentist"
          rating="5.0"
        />
      </View>
      <ContextButton></ContextButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
