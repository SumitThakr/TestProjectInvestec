import React,{FunctionComponent} from 'react';
import { StyleProp, StyleSheet, TextInput, TextStyle } from 'react-native';
import { Colors } from '../constants';
import { isIOS } from '../utils';

interface IProps {
    onChangeText?:((text: string) => void) | undefined;
    placeholder?: string | undefined;
    style?: StyleProp<TextStyle> | undefined;
    maxLength?: number | undefined;
    multiline?: boolean | undefined;
    value?: string | undefined;
    editable?: boolean | undefined;
}
 
export const TextInputRN: FunctionComponent<IProps> = (props) => {
    return (
      <TextInput
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        style={[styles.style, props.style]}
        maxLength={props.maxLength}
        multiline={props.multiline}
        value={props.value}
        editable={props.editable}
      />
    );
}

const styles = StyleSheet.create({
  style: {
    borderWidth: 1,
    borderRadius: 5,
    fontSize: isIOS() ? 20 : 17,
    paddingTop: isIOS() ? 15 : 7,
    paddingBottom: isIOS() ? 15 : 7,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: Colors.white,
  },
});