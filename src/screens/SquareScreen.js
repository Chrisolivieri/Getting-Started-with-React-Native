import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  // METODO USEREDUCER

  const [state, runMyReducer] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  const { red, green, blue } = state;
  const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number}
    // action === {type: "change_red || "change_green" || "change_blue", payload:  15 || -15}

    switch (action.type) {
      case "change_red":
        return state.red + action.payload > 225 ||
          state.red + action.payload < 0
          ? state
          : { ...state, red: state.red + action.payload }; // con "...state" copiamo tutto lo stato di "state" e successivamente lo andiamo a modificare, cosi non lo facciamo direttamente

      case "change_green":
        return state.green + action.payload > 255 ||
          state.green + action.payload < 0
          ? state
          : { ...state, green: state.green + action.payload };

      case "change_blue":
        return state.blue + action.payload > 255 ||
          state.blue + action.payload < 0
          ? state
          : { ...state, blue: state.blue + action.payload };

      default:
        return state;
    }
  };

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
          runMyReducer({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
        color="Rosso"
      />
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
        color="Blu"
      />
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ type: "change_green", payload: -1 * COLOR_INCREMENT })
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
