import React, { FunctionComponent } from "react";
import { ActivityIndicatorProps, GestureResponderEvent, StyleProp, StyleSheet, TextProps, TextStyle, ViewStyle } from "react-native";
import { Button } from "react-native-elements";
import { IconNode } from "react-native-elements/dist/icons/Icon";
import { Colors } from "../constants";
import { isIOS, width } from "../utils";

export interface Props {
    title?: string | React.ReactElement<{}>;
    titleStyle?: StyleProp<TextStyle>;
    titleProps?: TextProps;
    buttonStyle?: StyleProp<ViewStyle>;
    type?: 'solid' | 'clear' | 'outline';
    loading?: boolean;
    loadingStyle?: StyleProp<ViewStyle>;
    loadingProps?: ActivityIndicatorProps;
    containerStyle?: StyleProp<ViewStyle>;
    icon?: IconNode;
    iconContainerStyle?: StyleProp<ViewStyle>;
    iconRight?: boolean;
    disabled?: boolean;
    disabledStyle?: StyleProp<ViewStyle>;
    disabledTitleStyle?: StyleProp<TextStyle>;
    raised?: boolean;
    iconPosition?: 'left' | 'right' | 'top' | 'bottom';
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export const ButtonRN: FunctionComponent<Props> = (props) => {
    return (
        <Button
            title={props.title}
            titleStyle={[styles.titleStyle, props.titleStyle]}
            titleProps={props.titleProps}
            buttonStyle={[styles.buttonStyle, props.buttonStyle]}
            type={props.type}
            loading={props.loading}
            loadingStyle={props.loadingStyle}
            loadingProps={props.loadingProps}
            containerStyle={[styles.containerStyle, props.containerStyle]}
            icon={props.icon}
            iconContainerStyle={props.iconContainerStyle}
            iconRight={props.iconRight}
            disabled={props.disabled}
            disabledStyle={props.disabledStyle}
            disabledTitleStyle={props.disabledTitleStyle}
            raised={props.raised}
            iconPosition={props.iconPosition}
            onPress={props.onPress}
        />
    );
}
const styles = StyleSheet.create({
    titleStyle: {
        letterSpacing: 1,
        fontSize: isIOS() ? 18 : 16,
        fontWeight: '600',
        color: Colors.black
    },
    buttonStyle: {
        backgroundColor: Colors.white,
        borderRadius: 8,
        paddingTop:10,
        paddingBottom:10
    },
    containerStyle: {
        width: width - 40,
        alignSelf: 'center'
    }
})