import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

function CounterScreen() {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>Current Count: {counter}</Text>
      <Button
        title="Aumenta"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Diminuisci"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default CounterScreen;
