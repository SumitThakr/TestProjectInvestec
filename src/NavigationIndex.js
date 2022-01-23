import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard, Login } from './screens';
const Stack = createNativeStackNavigator();
const MainStack = () => (
    <Stack.Navigator initialRouteName={'Login'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
)
export default MainStack;