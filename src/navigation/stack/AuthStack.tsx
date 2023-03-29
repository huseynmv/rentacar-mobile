import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import Index from '../../navigation';
import ConfirmCode from '../../screens/ConfirmCode';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      {/* <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ConfirmCode" component={ConfirmCode} />
      <Stack.Screen name="Register" component={Register} /> */}

      <Stack.Screen name="MyTabs" component={Index} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
