import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import React from 'react';
import Lottie from 'lottie-react-native';

const Confirm = ({navigation}: any) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Lottie
        source={require('../../assets/confirmation.json')}
        autoPlay
        loop
        style={{
          width: '100%',
          height: 300,
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DiscoverScreen');
        }}>
        <Text style={{fontSize: 24, fontWeight: '400', color: '#2CB67D'}}>
          Go to main page
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Confirm;

const styles = StyleSheet.create({});
