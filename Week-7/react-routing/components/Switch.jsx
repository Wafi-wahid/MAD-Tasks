import React, { useState } from "react";
import { Switch } from "react-native";
export default function Switch() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);
  return <Switch value={isEnabled} onValueChange={toggleSwitch}></Switch>;
}
