import {
  StyleSheet,
  Text,
  View,
  Image,
  DrawerLayoutAndroidComponent,
} from 'react-native';
import Navigation from './src/navigation/stack/AuthStack';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import Onboarding from 'react-native-onboarding-swiper';
import Tab from './src/navigation';
import {store} from './src/features';
import AuthStack from './src/navigation/stack/AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  return (
    <>
      <>
        <Provider store={store}>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </Provider>
      </>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
