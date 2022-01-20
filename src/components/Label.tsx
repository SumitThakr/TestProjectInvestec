import React, { FunctionComponent } from "react";
import { Text, TextStyle } from "react-native";
export interface IProps {
    style?: TextStyle;
    label: String
}

export const Label: FunctionComponent<IProps> = (props) => {
    return (
        <Text numberOfLines={1} style={[props.style]}>{props.label}</Text>
    );
}