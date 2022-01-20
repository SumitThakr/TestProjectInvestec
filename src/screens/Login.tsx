import React, { FunctionComponent, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { CommomnStyle } from "../commonstyle";
import { ButtonRN, Cus_Header, Label, TextInputRN } from "../components";
import { ActionTypes, Colors } from "../constants";
import { AlertRN, height } from "../utils";
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { getNameType } from "../redux";
import { useDispatch } from "react-redux";
export interface IProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}

export const Login: FunctionComponent<IProps> = (props) => {
    const [name, setName] = useState(null)
    const dispatch = useDispatch()
    const validateData = (name: String) => {
        if (name == null) {
            AlertRN('Please enter name...!')
        } else {
            dispatch(getNameType(name, ActionTypes.SET_NAME))
            props.navigation.navigate('Dashboard')
        }
    }
    return (
        <View style={CommomnStyle.container}>
            <Cus_Header
                centerComponent={
                    <Label
                        label={'Login'}
                        style={CommomnStyle.headerLabelStyle}
                    />
                }
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.subContainer}>
                    <Label
                        label={'Enter Your Name'}
                        style={styles.inputLabel}
                    />
                    <TextInputRN
                        style={styles.inputStyle}
                        placeholder="Enter here..."
                        onChangeText={(name: string) => { setName(name) }}
                    />
                    <ButtonRN
                        title={'Next'}
                        containerStyle={styles.containerStyle}
                        onPress={() => { validateData(name) }}
                    />
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    contentContainerStyle: {
        height: height,
        justifyContent: 'center'
    },
    subContainer: {
        marginTop: 80,
        marginRight: 20,
        marginLeft: 20
    },
    inputLabel: {
        color: Colors.white,
        fontSize: 18, fontWeight: '700',
        letterSpacing: 1
    },
    inputStyle: { marginTop: 5 },
    containerStyle: { marginTop: 30 }
});