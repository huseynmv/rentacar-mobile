import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const Register = ({navigation}: any) => {
  return (
    <View>
      <Button title="main" onPress={() => navigation.navigate('ConfirmCode')} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
