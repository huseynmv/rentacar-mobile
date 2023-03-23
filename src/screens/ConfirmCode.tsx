import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ConfirmCode = ({navigation}: any) => {
  return (
    <View>
      <Text>ConfirmCode</Text>
      <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
        <Text>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmCode;

const styles = StyleSheet.create({});
