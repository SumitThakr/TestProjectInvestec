import React, { FunctionComponent } from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { Colors } from "../constants";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { isIOS } from "../utils";

export interface IProps {
    onPress?: ((event: GestureResponderEvent) => void) | undefined; 
}
 
export const BackIcon: FunctionComponent<IProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{paddingTop:isIOS()?0:3}}>
      <SimpleLineIcons name="arrow-left" size={isIOS()?18:14} color={Colors.black} />
    </TouchableOpacity>
  );
}