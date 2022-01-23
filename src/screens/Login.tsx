import React, { FunctionComponent, useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, NativeModules } from "react-native";
import { CommomnStyle } from "../commonstyle";
import { ButtonRN, Cus_Header, Label, TextInputRN } from "../components";
import { ActionTypes, Colors } from "../constants";
import { AlertRN, height } from "../utils";
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { getNameType } from "../redux";
import { useDispatch } from "react-redux";
const { DeviceTypeModule,DeviceTypeIos } = NativeModules;
export interface IProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}

export const Login: FunctionComponent<IProps> = (props) => {
    const dispatch = useDispatch()
    const [name, setName] = useState(null)
    const [message,setMessage]= useState(null);

    useEffect(() => {
      getDeviceType()
    }, [])

    const getDeviceType = () => {
            DeviceTypeModule?.isEmulator()?.then((isEmulator:boolean)=>{
                console.log('isEmulator:', isEmulator)
                setMessage('This is Emulator!')

               })
               DeviceTypeIos?.isSimulator()?.then((isSimulator:boolean)=>{
                console.log('isSimulator:', isSimulator)
                setMessage('This is Simulator!')
               })   
    }
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
                    <Label
                    label={message}
                    style={styles.textStyle}
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
    containerStyle: { marginTop: 30 },
    textStyle: {
        fontSize: 14,
        fontWeight: '900',
        color: Colors.white,
        alignSelf: 'center',
        letterSpacing: 1,
        marginTop:50
    }
});