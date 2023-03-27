import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const ConfirmCode = ({navigation, route}: any) => {
  let email = route.params;
  const [code, setcode] = useState('');
  console.log(email.email);

  const confirm = () => {
    axios
      .post('https://rent-car-api.onrender.com/api/auth/confirmCode', {
        email: email.email,
        confirmCode: Number(code),
      })
      .then(data => {
        console.log(data);
        navigation.navigate('MyTabs');
      })
      .catch(err => console.log(err));
  };

  return (
    <View>
      <TextInput
        style={{height: 50, width: 200, borderRadius: 12, borderWidth: 1}}
        placeholder="Confirm code"
        onChangeText={setcode}
      />
      <TouchableOpacity onPress={() => confirm()}>
        <Text>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmCode;

const styles = StyleSheet.create({});
