import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
// import {Text} from 'react-native-paper'
import Lottie from 'lottie-react-native';
const Index = () => {
  return (
    <View style={{flex: 2}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 24}}>Account verified</Text>
          <View>
            <Lottie
              source={require('../../assets/verified.json')}
              autoPlay
              loop
              style={{height: 40, width: 40}}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          borderRadius: 50,

          padding: 40,
          backgroundColor: '#E5E4E2',
          justifyContent: 'space-evenly',
          flex: 1,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 22, fontWeight: '300'}}>Full name</Text>
          <Text style={{fontSize: 22, fontWeight: '300'}}>Huseyn Mammadov</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 22, fontWeight: '300'}}>Email</Text>
          <Text style={{fontSize: 22, fontWeight: '300'}}>
            huseynmv@yahoo.com
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 22, fontWeight: '300'}}>Username</Text>
          <Text style={{fontSize: 22, fontWeight: '300'}}>huseyn_mammadov</Text>
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
