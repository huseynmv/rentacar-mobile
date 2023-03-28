import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import React, {useState} from 'react';
import axios from 'axios';
import data from '../assets/data';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

const Register = ({navigation}: any) => {
  const [fullName, setfullName] = useState('');
  const [email, setemail] = useState('');
  const [loading, setloading] = useState(false);

  const register = () => {
    setloading(true);
    axios
      .post('https://rent-car-api.onrender.com/api/user/register', {
        email: email,
        fullName: fullName,
      })
      .then(data => {
        navigation.navigate('ConfirmCode', {
          email: email,
        });
        setloading(false);
      });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 26, fontWeight: '600'}}>Sign Up</Text>
        </View>
        <Text style={{fontSize: 20, fontWeight: '400', marginHorizontal: 20}}>
          Full name
        </Text>
        <TextInput
          onChangeText={setfullName}
          style={{
            width: '90%',
            height: 40,
            borderWidth: 2,
            marginHorizontal: 20,
            marginTop: 10,
            borderRadius: 12,
            borderColor: '#94A1B2',
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '400',
            marginHorizontal: 20,
            marginVertical: 10,
          }}>
          Email
        </Text>
        <TextInput
          onChangeText={setemail}
          style={{
            width: '90%',
            height: 40,
            borderWidth: 2,
            marginHorizontal: 20,
            // marginTop: 10,
            borderRadius: 12,
            borderColor: '#94A1B2',
          }}
        />
        {loading ? (
          <TouchableOpacity
            style={{
              width: '90%',
              opacity: 0.7,
              height: 45,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2CB67D',
              marginHorizontal: 20,
              marginTop: 30,
            }}>
            <MaterialIndicator />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => register()}
            style={{
              width: '90%',
              height: 45,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2CB67D',
              marginHorizontal: 20,
              marginTop: 30,
            }}>
            <Text style={{color: '#FFF', fontSize: 20}}>Continue</Text>
          </TouchableOpacity>
        )}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 16}}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#2CB67D', marginLeft: 5, fontSize: 16}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
