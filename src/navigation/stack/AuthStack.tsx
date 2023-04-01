import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import Index from '../../navigation';
import ConfirmCode from '../../screens/ConfirmCode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboarding from '../../components/Onboarding/Index';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  let token: any = [];
  useEffect(() => {
    const getToken = async () => {
      await AsyncStorage.getItem('token').then(res => {
        console.log('res', res);

        token.push(res);
        console.log('token array', token);
        console.log('token 0', token[0]);
      });
    };
    const clear = async () => {
      await AsyncStorage.clear().then(data => {
        console.log('cleared');
      });
    };
    clear();

    getToken();
  }, []);

  return (
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
