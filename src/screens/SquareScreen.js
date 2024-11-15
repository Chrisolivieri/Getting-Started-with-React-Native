import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  
  // METODO USEREDUCER

  const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number}
    // action === {colorToChange: "red || "green" || "blue", amount 15|| -15}

    switch (action.colorToChange) {
      case "red":
        return { ...state, red: state.red + action.amount }; // con "...state" copiamo tutto lo stato di "state" e successivamente lo andiamo a modificare, cosi non lo facciamo direttamente

      case "green":
        return { ...state, green: state.green + action.amount };
      case "blue":
        return { ...state, blue: state.blue + action.amount };
      default:
        return state;
    }
  };

  const [state, runMyReducer] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  const { red, green, blue } = state;

  //METODO CLASSICO

  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);

  // const setColor = (color, change) => {
  //   // color === "red", "green", "blue"
  //   // change === +15, -15
  //   switch (color) {
  //     case "red":
  //       red + change > 225 || red + change < 0 ? null : setRed(red + change);
  //       // if (red + change > 225 || red + change < 0) {
  //       //   return;
  //       // } else {
  //       //   setRed(red + change);
  //       // }
  //       return;

  //     case "blue":
  //       blue + change > 225 || blue + change < 0
  //         ? null
  //         : setBlue(blue + change);
  //       return;

  //     case "green":
  //       green + change > 225 || green + change < 0
  //         ? null
  //         : setGreen(green + change);
  //       return;

  //     default:
  //       return;
  //   }
  // };

  return (
    //METODO USEREDUCER

    <View>
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
        color="Rosso"
      />
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
        color="Blu"
      />
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
        color="Verde"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>

    //METODO CLASSICO
    // <View>
    //   <ColorCounter
    //     onIncrease={() => setColor("red", COLOR_INCREMENT)}
    //     onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
    //     color="Rosso"
    //   />
    //   <ColorCounter
    //     onIncrease={() => setColor("blue", COLOR_INCREMENT)}
    //     onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
    //     color="Blu"
    //   />
    //   <ColorCounter
    //     onIncrease={() => setColor("green", COLOR_INCREMENT)}
    //     onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
    //     color="Verde"
    //   />
    //   <View
    //     style={{
    //       height: 150,
    //       width: 150,
    //       backgroundColor: `rgb(${red},${green},${blue})`,
    //     }}
    //   />
    // </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
