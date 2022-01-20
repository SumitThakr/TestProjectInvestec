import React from 'react';
import { TextProps, StyleProp, TextStyle } from 'react-native';
import { Header, } from 'react-native-elements';
import { IconObject } from 'react-native-elements/dist/icons/Icon';
import { Colors } from '../constants';
interface HeaderIcon extends IconObject {
    icon?: string;
    text?: string;
    color?: string;
    style?: StyleProp<TextStyle>;
}
declare type HeaderSubComponent = React.ReactElement<{}> | TextProps | HeaderIcon;
export interface IProps {
    leftComponent?: HeaderSubComponent;
    centerComponent?: HeaderSubComponent;
    rightComponent?: HeaderSubComponent;
}

export const Cus_Header: React.SFC<IProps> = (props) => {
    return (
        <Header
            statusBarProps={{ barStyle: 'dark-content', backgroundColor: Colors.white, }}
            leftComponent={props.leftComponent}
            rightComponent={props.rightComponent}
            centerComponent={props.centerComponent}
            backgroundColor={Colors.white}
        />
    );
}
