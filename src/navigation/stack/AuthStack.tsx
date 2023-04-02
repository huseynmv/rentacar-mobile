import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import Index from '../../navigation';
import ConfirmCode from '../../screens/ConfirmCode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboarding from '../../components/Onboarding/Index';
import {DotIndicator} from 'react-native-indicators';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  const [token, settoken] = useState(false);
  const [loading, setloading] = useState(true);
  console.log(token);

  useEffect(() => {
    const getToken = async () => {
      await AsyncStorage.getItem('token').then(res => {
        if (res) {
          settoken(true);
          setloading(false);
        } else {
          setloading(false);
        }
      });
    };
    getToken();
    console.log('got token');

    console.log(token);
  }, []);

  return loading ? (
    <DotIndicator color="#2CB67D" />
  ) : (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      {token ? (
        <Stack.Screen name="MyTabs" component={Index} />
      ) : (
        <>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ConfirmCode" component={ConfirmCode} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="MyTabs" component={Index} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
