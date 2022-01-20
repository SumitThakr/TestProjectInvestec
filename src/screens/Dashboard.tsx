import React, { FunctionComponent } from "react";
import { View, ScrollView, StyleSheet, Text, Alert } from "react-native";
import { CommomnStyle } from "../commonstyle";
import { BackIcon, ButtonRN, Cus_Header, Label } from "../components";
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { AlertRN, height, isIOS, width } from "../utils";
import { RouteProp } from '@react-navigation/native';
import { Colors } from "../constants";
import { useSelector } from "react-redux";
import { RNSlidingButton, SlideDirection } from 'rn-sliding-button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export interface IProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
    //  route: RouteProp<{ params: { name: string } }, 'params'>
}

export const Dashboard: FunctionComponent<IProps> = (props) => {
    //const [name, setName] = useState(props.route.params.name)
    const state = useSelector((state: { name: string }) => state)
    const onSlideRight = () => {
        AlertRN('This is sliding button...!')
    };

    return (
        <View style={CommomnStyle.container}>
            <Cus_Header
                rightComponent={
                    <Label
                        label={state.name}
                        style={CommomnStyle.headerLabelStyle}
                    />
                }
                leftComponent={
                    <BackIcon
                        onPress={() => { props.navigation.goBack() }}
                    />
                }
            />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.subContainer}>
                    <Label
                        label={'4 Variations of a button'}
                        style={styles.variationLabelStyle}
                    />
                    <ButtonRN
                        title={'Press me'}
                        containerStyle={styles.marginTop10}
                        type="clear"
                        buttonStyle={{ backgroundColor: Colors.black }}
                        titleStyle={{ color: Colors.blue }}
                        onPress={() => { AlertRN('This is label button...!') }}
                    />
                    <ButtonRN
                        title={'Press me'}
                        containerStyle={styles.marginTop10}
                        buttonStyle={{ backgroundColor: Colors.grey }}
                        titleStyle={{ color: Colors.blue }}
                        onPress={() => { AlertRN('This is fill button with color grey...!') }}
                    />
                    <ButtonRN
                        title={'Press me'}
                        containerStyle={styles.marginTop10}
                        buttonStyle={{ backgroundColor: Colors.lightBlue }}
                        titleStyle={{ color: Colors.white }}
                        onPress={() => { AlertRN('This is fill button with color blue...!') }}
                    />
                    <RNSlidingButton
                        style={styles.slidingButtonStyle}
                        height={50}
                        onSlidingSuccess={onSlideRight}
                        slideDirection={SlideDirection.RIGHT}
                    >
                        <View style={styles.slidingViewStyle}>
                            <FontAwesome
                                name="diamond"
                                color={Colors.white}
                                style={styles.slidingIconStyle}
                                size={16}
                            />
                            <Text numberOfLines={1} style={styles.titleText}>
                                {"Slide me to continue"}
                            </Text>
                        </View>
                    </RNSlidingButton>
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
    contentContainerStyle: {
        height: height - 80,
        justifyContent: 'flex-end'
    },
    marginTop10: {
        marginTop: 10
    },
    variationLabelStyle: {
        fontSize: 16,
        color: Colors.darkYellow,
        textAlign: 'center'
    },
    titleText: {
        fontSize: 17,
        fontWeight: 'normal',
        textAlign: 'center',
        color: Colors.blue,
        flex: 1
    },
    slidingButtonStyle: {
        width: width - 40,
        alignSelf: 'center',
        letterSpacing: 1,
        fontSize: isIOS() ? 18 : 16,
        fontWeight: '600',
        backgroundColor: Colors.black,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.grey,
        marginTop: 10,
    },
    slidingViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    slidingIconStyle: {
        backgroundColor: Colors.lightBlue,
        height: 50,
        width: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 8
    }

});

//https://stackoverflow.com/questions/34727912/react-native-how-can-i-detect-if-my-code-is-running-in-the-simulator?rq=1