import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Aumenta ${color}`} />
      <Button onPress={() => onDecrease()} title={`Diminuisci ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
