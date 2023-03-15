import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';

import Tab from './src/navigation';
import {store} from './src/features';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  // console.log(AsyncStorage.getItem('favorites'));

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Tab />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
