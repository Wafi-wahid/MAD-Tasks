import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

const App = () => {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isNewInput, setIsNewInput] = useState(true);

  // Function to handle digit press
  const handleDigitPress = (digit) => {
    if (isNewInput) {
      setInput(digit === "." ? "0." : digit);
      setIsNewInput(false);
    } else if (digit === "." && input.includes(".")) {
      return;
    } else {
      setInput(input + digit);
    }
  };

  // Function to handle operator press
  const handleOperatorPress = (op) => {
    if (operator && !isNewInput) {
      calculate();
    } else {
      setResult(parseFloat(input));
    }
    setOperator(op);
    setIsNewInput(true);
  };

  // Function to calculate the result
  const calculate = () => {
    if (operator && result !== null) {
      let current = parseFloat(input);
      let newResult = result;

      switch (operator) {
        case "+":
          newResult += current;
          break;
        case "-":
          newResult -= current;
          break;
        case "x":
          newResult *= current;
          break;
        case "/":
          newResult /= current;
          break;
        default:
          return;
      }

      setInput(newResult.toString());
      setResult(newResult);
      setOperator(null);
      setIsNewInput(true);
    }
  };

  // Function to handle special buttons
  const handleSpecialPress = (type) => {
    switch (type) {
      case "C":
        setInput("0");
        setResult(null);
        setOperator(null);
        setIsNewInput(true);
        break;
      case "+/-":
        setInput((parseFloat(input) * -1).toString());
        break;
      case "%":
        setInput((parseFloat(input) / 100).toString());
        break;

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{input}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {["C", "+/-", "%", "/"].map((op) => (
          <Button key={op} label={op} onPress={() => handleSpecialPress(op)} />
        ))}
        {["7", "8", "9", "x"].map((item) => (
          <Button
            key={item}
            label={item}
            onPress={() =>
              item === "x" ? handleOperatorPress(item) : handleDigitPress(item)
            }
          />
        ))}
        {["4", "5", "6", "-"].map((item) => (
          <Button
            key={item}
            label={item}
            onPress={() =>
              item === "-" ? handleOperatorPress(item) : handleDigitPress(item)
            }
          />
        ))}
        {["1", "2", "3", "+"].map((item) => (
          <Button
            key={item}
            label={item}
            onPress={() =>
              item === "+" ? handleOperatorPress(item) : handleDigitPress(item)
            }
          />
        ))}
        {["0", ".", "="].map((item) => (
          <Button
            key={item}
            label={item}
            onPress={() =>
              item === "=" ? calculate() : handleDigitPress(item)
            }
          />
        ))}
      </View>
    </View>
  );
};

// Reusable Button Component
const Button = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 40,
  },
  displayContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: "#000",
    marginTop: 100,
  },
  displayText: {
    fontSize: 60,
    color: "#fff",
    marginTop: 100,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    width: "20%",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 70,
    height: 80,
  },
  buttonText: {
    fontSize: 30,
    color: "#fff",
  },
});

export default App;
