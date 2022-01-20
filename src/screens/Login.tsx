import React, { FunctionComponent, useReducer, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { CommomnStyle } from "../commonstyle";
import { ButtonRN, Cus_Header, Label, TextInputRN } from "../components";
import { ActionTypes, Colors } from "../constants";
import { height } from "../utils";
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { Reducer } from "../redux/Reducer";
import { getNameType, InitialState } from "../redux";
export interface IProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}

export const Login: FunctionComponent<IProps> = (props) => {
    const [name, setName] = useState('')
    const [state,dispatch]=useReducer(Reducer,InitialState)
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
                        onPress={()=>{
                            dispatch(getNameType(name,ActionTypes.SET_NAME))
                            props.navigation.navigate('Dashboard',{name:name})}
                        }
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