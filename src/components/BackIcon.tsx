import React, { FunctionComponent } from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { Colors } from "../constants";
import Entypo from 'react-native-vector-icons/Entypo';
import { isIOS } from "../utils";

export interface IProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export const BackIcon: FunctionComponent<IProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{ paddingTop: isIOS() ? 0 : 3 }}>
      <Entypo name="chevron-left" size={isIOS() ? 29 : 25} color={Colors.black} />
    </TouchableOpacity>
  );
}