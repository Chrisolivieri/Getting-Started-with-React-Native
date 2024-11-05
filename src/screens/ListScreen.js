import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
const ListScreen = () => {
  const cars = [
    { name: "Ferrari", year: 2010 },
    { name: "BMW", year: 1990 },
    { name: "Audi", year: 2000 },
    { name: "Mercedes", year: 2015 },
    { name: "Porsche", year: 2010 },
    { name: "Lamborghini", year: 20124 },
    { name: "Rolls Royce", year: 2016 },
    { name: "Jaguar", year: 2017 },
    { name: "Bugatti", year: 2018 },
  ];
  return (
    <FlatList
      key={(car) => cars.name}
      data={cars}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            Name = {item.name} Year = {item.year}
          </Text>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 35,
    marginLeft: 10,
  },
});

export default ListScreen;
