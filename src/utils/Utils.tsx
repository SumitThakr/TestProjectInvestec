import { Dimensions, Platform } from "react-native";

export const IOS = 'ios';
export const ANDROID = 'android';
export const isIOS = (): boolean => Platform.OS === IOS;
export const isAndroid = (): boolean => Platform.OS === ANDROID;
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
