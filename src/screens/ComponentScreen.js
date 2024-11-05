import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  
  const name = "Christian"

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.text2Style}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    color: "red",
  },
  text2Style: {
    fontSize: 20,
    color: "blue",
  },
});

export default ComponentsScreen;
