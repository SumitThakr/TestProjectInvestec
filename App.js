import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SplashScreen } from './src/screens';
import MainStack from './src/NavigationIndex';
import { Reducer } from './src/redux/Reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
export const store = createStore(Reducer)
export const App = () => {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        {splash ? <SplashScreen /> :
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        }
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 }
});
