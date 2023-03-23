import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Login = ({navigation}: any) => {
  const confirmLogin = () => {
    navigation.navigate('ConfirmCode');
    console.log(navigation);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          // marginVertical: 50,
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
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
