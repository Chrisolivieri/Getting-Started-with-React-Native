import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Vai a Components"
      />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text style={styles.text2}>Vai a lista di auto</Text>
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Vai a Image"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Vai a Counter"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Vai a Color"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Vai a Square"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    display: "flex",
    fontSize: 30,
    color: "blue",
  },
  text2: {
    textAlign: "center",
    display: "flex",
    fontSize: 30,
    color: "red",
  },
});

export default HomeScreen;
