import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import Tab from './src/navigation';
import {store} from './src/features';
const App = () => {
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
