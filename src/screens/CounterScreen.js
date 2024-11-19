import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

function CounterScreen() {
  // const [counter, setCounter] = useState(0);

  const reducer = (state, action) => {
    // state === {counter:number}
    //action === {type: "increment" || "decrement", payload: 1}

    switch (action.type) {
      case "increment":
        return { ...state, counter: state.counter + action.payload };
      case "decrement":
        return { ...state, counter: state.counter - action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { counter: 0 }); // setto il valore dello stato iniziale, si tende ad usare un oggetto perchè di solito ci sono diverse proprietà nell'useReducer e non solo una
  
  return (
    <View>
      <Text>Current Count: {state.counter}</Text>
      <Button
        title="Aumenta"
        onPress={() => {
          dispatch({ type: "increment", payload: 1 });
        }}
      />
      <Button
        title="Diminuisci"
        onPress={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default CounterScreen;
