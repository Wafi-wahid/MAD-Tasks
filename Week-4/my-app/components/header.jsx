import React from "react";
import { Text } from "react-native";

export default function header(props) {
  return (
    <>
      <Text>I am {props.name}.</Text>
    </>
  );
}
