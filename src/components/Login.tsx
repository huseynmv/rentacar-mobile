import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const confirmLogin = () => {
    fetch('https://rent-a-car-api.onrender.com/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({email: 'mammadovhuseyn37@gmail.com'}),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 50,
        }}>
        <Text style={{fontSize: 24, fontWeight: '700'}}>
          Welcome to our app
        </Text>
        <Text style={{fontSize: 20, fontWeight: '500'}}>
          Login to your account
        </Text>
      </View>
      <View>
        <TextInput
          style={{height: 50, width: 200, borderRadius: 12, borderWidth: 1}}
          placeholder="Email"
        />
        <Button title="Login" onPress={() => confirmLogin()} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
