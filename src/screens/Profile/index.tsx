import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
// import {Text} from 'react-native-paper'
const Index = () => {
  return (
    <View>
      <Avatar.Image
        size={200}
        source={require('../../assets/download.png')}
        style={{
          width: '100%',
          backgroundColor: 'white',
          justifyContent: 'center',
          marginTop: 50,
          alignItems: 'center',
          padding: 50,
        }}
      />

      <View
        style={{
          marginTop: 20,
          borderRadius: 50,
          padding: 20,
          backgroundColor: '#E5E4E2',
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 20, fontWeight: '300'}}>Full name</Text>
          <Text style={{fontSize: 20, fontWeight: '300'}}>Huseyn Mammadov</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: '300'}}>Email</Text>
          <Text style={{fontSize: 20, fontWeight: '300'}}>
            huseynmv@yahoo.com
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: '300'}}>Username</Text>
          <Text style={{fontSize: 20, fontWeight: '300'}}>huseyn_mammadov</Text>
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
