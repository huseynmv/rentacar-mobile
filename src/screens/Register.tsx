import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import data from '../assets/data';

const Register = ({navigation}: any) => {
  const [fullName, setfullName] = useState('');
  const [email, setemail] = useState('');

  const register = () => {
    axios
      .post('https://rent-car-api.onrender.com/api/user/register', {
        email: email,
        fullName: fullName,
      })
      .then(data => {
        navigation.navigate('ConfirmCode', {
          email: email,
        });
      });
  };

  return (
    <View>
      <TextInput
        style={{height: 50, width: 200, borderRadius: 12, borderWidth: 1}}
        placeholder="Email"
        onChangeText={setemail}
      />
      <TextInput
        style={{height: 50, width: 200, borderRadius: 12, borderWidth: 1}}
        placeholder="Full name"
        onChangeText={setfullName}
      />

      <Button title="main" onPress={() => register()} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
