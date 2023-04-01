import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {MaterialIndicator} from 'react-native-indicators';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfirmCode = ({navigation, route}: any) => {
  const CELL_COUNT = 6;
  let email = route.params;

  const [loading, setloading] = useState(false);

  const [value, setValue] = useState('');

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const confirm = () => {
    setloading(true);
    axios
      .post('https://rent-car-api.onrender.com/api/auth/confirmCode', {
        email: email.email,
        confirmCode: Number(value),
      })
      .then(async data => {
        // console.log(data.data);
        await AsyncStorage.setItem('userEmail', email.email);
        await AsyncStorage.setItem('token', data.data.token);
        console.log('Email and token has set to storage');

        navigation.navigate('MyTabs');
        setloading(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Verification</Text>
      <CodeField
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      {loading ? (
        <TouchableOpacity
          onPress={() => confirm()}
          style={{
            width: '100%',
            opacity: 0.7,
            height: 45,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2CB67D',
            // marginHorizontal: 20,
            // paddingHorizontal: 10,
            marginTop: 30,
          }}>
          <MaterialIndicator />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => confirm()}
          style={{
            width: '100%',
            height: 45,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2CB67D',
            // marginHorizontal: 20,
            // paddingHorizontal: 10,
            marginTop: 30,
          }}>
          <Text style={{color: '#FFF', fontSize: 20}}>Confirm Code</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default ConfirmCode;

const styles = StyleSheet.create({
  root: {flex: 1, paddingHorizontal: 30, justifyContent: 'center'},
  title: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 32,
  },
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 32,
    borderWidth: 2,
    borderColor: '#2CB67D',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});
