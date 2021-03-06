import React, { FunctionComponent } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Label } from "../components";
import { Colors } from "../constants";
import { height } from "../utils";
interface IProps {

}
export const SplashScreen: FunctionComponent<IProps> = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainerStyle}>
                <Label
                    label={'Welcome to App'}
                    style={styles.textStyle}
                />
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    contentContainerStyle: {
        height: height,
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 24,
        fontWeight: '900',
        color: Colors.black,
        alignSelf: 'center',
        letterSpacing: 1
    }
});
