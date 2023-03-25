import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const Login = ({navigation}: any) => {
  const [Useremail, setUseremail] = useState('');

  const confirmLogin = () => {
    console.log(Useremail);

    axios
      .post('https://rent-car-api.onrender.com/api/auth/login', {
        email: Useremail,
      })
      .then(data => console.log(data));
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
          onChangeText={setUseremail}
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
