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
import {MaterialIndicator} from 'react-native-indicators';

const Login = ({navigation}: any) => {
  const [Useremail, setUseremail] = useState('');
  const [loading, setloading] = useState(false);

  const confirmLogin = () => {
    setloading(true);
    console.log(Useremail);

    axios
      .post('https://rent-car-api.onrender.com/api/auth/login', {
        email: Useremail,
      })
      .then(data => {
        if (data.data.statusCode == 200) {
          navigation.navigate('MyTabs');
          setloading(false);
        }
      });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: '500'}}>
          Login to your account
        </Text>
        <TextInput
          onChangeText={setUseremail}
          placeholder="Your email adress"
          style={{
            width: '70%',
            height: 45,
            borderWidth: 2,

            // marginLeft: 60,
            // marginRight: 60,
            marginTop: 10,
            borderRadius: 12,
            borderColor: '#94A1B2',
          }}></TextInput>
        {loading ? (
          <TouchableOpacity
            style={{
              width: '70%',
              height: 45,
              borderRadius: 10,
              opacity: 0.7,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2CB67D',
              marginHorizontal: 20,
              marginTop: 10,
            }}>
            <MaterialIndicator />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => confirmLogin()}
            style={{
              width: '70%',
              height: 45,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2CB67D',
              marginHorizontal: 20,
              marginTop: 10,
            }}>
            <Text style={{color: '#FFF', fontSize: 20}}>Login</Text>
          </TouchableOpacity>
        )}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 16}}>Dont have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#2CB67D', marginLeft: 5, fontSize: 16}}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
