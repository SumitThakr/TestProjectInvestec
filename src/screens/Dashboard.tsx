import React, { FunctionComponent, useReducer, useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { CommomnStyle } from "../commonstyle";
import { ButtonRN, Cus_Header, Label } from "../components";
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { height, width } from "../utils";
import { RouteProp } from '@react-navigation/native';
import { Colors } from "../constants";
import { Reducer } from "../redux/Reducer";
import { InitialState } from "../redux";
import { useSelector } from "react-redux";
export interface IProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    //  route: RouteProp<{ params: { name: string } }, 'params'>
}

export const Dashboard: FunctionComponent<IProps> = (props) => {
    //const [name, setName] = useState(props.route.params.name)
    const state = useSelector((state: {name:string}) => state)
    console.log('state',state)
    return (
        <View style={CommomnStyle.container}>
            <Cus_Header
                rightComponent={
                    <Label
                        label={state.name}
                        style={CommomnStyle.headerLabelStyle}
                    />
                }
            />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: height - 80, justifyContent: 'flex-end' }}>
                <View style={styles.subContainer}>
                    <Label
                        label={'4 Variations of a button'}
                        style={{ fontSize: 16, color: Colors.darkYellow, textAlign: 'center' }}
                    />
                    <ButtonRN
                        title={'Press me'}
                        containerStyle={{ marginTop: 10 }}
                        type="clear"
                        buttonStyle={{ backgroundColor: Colors.black }}
                        titleStyle={{ color: Colors.blue }}
                    />
                    <ButtonRN
                        title={'Press me'}
                        containerStyle={{ marginTop: 10 }}
                        buttonStyle={{ backgroundColor: Colors.grey }}
                        titleStyle={{ color: Colors.blue }}
                    />
                    <ButtonRN
                        title={'Press me'}
                        containerStyle={{ marginTop: 10 }}
                        buttonStyle={{ backgroundColor: Colors.lightBlue }}
                        titleStyle={{ color: Colors.white }}
                    />
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    subContainer: {
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20
    },

});