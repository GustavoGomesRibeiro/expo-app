import React from "react";
import Toast from "react-native-tiny-toast";
// import { SucessMessageToast } from "./styled-components";

export default function AlertToast() {
  return (
    <Toast
      position={Toast.position.center}
      containerStyle={((backgroundColor = "#54a634"), (borderRadius = 15))}
      textStyle={(color = "#fff")}
      mask={false}
      duration={2000}
      animation={true}
    >
      Serviço cadastrado!
    </Toast>
  );
}
