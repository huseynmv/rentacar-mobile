import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tab from './src/navigation';
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab />
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
