import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
// import {Text} from 'react-native-paper'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import Lottie from 'lottie-react-native';
import {faPerson, faUser} from '@fortawesome/free-solid-svg-icons';
import {faInfo} from '@fortawesome/free-solid-svg-icons';
import {faPersonArrowDownToLine} from '@fortawesome/free-solid-svg-icons';
import {faPersonDress} from '@fortawesome/free-solid-svg-icons';
import {faPersonBiking} from '@fortawesome/free-solid-svg-icons';
import {faPersonCane} from '@fortawesome/free-solid-svg-icons';
import {faPersonWalking} from '@fortawesome/free-solid-svg-icons';
import {faMailBulk} from '@fortawesome/free-solid-svg-icons';
import {faMailForward} from '@fortawesome/free-solid-svg-icons';
import {faMailchimp} from '@fortawesome/free-brands-svg-icons';
const Index = () => {
  return (
    <View style={{flex: 2}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#2CB67D',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        <Avatar.Image
          size={200}
          source={require('../../assets/download.png')}
          style={{
            width: '100%',
            backgroundColor: '#2CB67D',
            justifyContent: 'center',
            marginTop: 50,
            alignItems: 'center',
            // padding: 50,
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
          // marginTop: 20,
          borderRadius: 50,
          paddingHorizontal: 40,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesomeIcon icon={faPerson} size={24} />

            <Text style={{fontSize: 20, fontWeight: '300'}}>Full name</Text>
          </View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '300',
              marginLeft: 24,
              marginBottom: 20,
            }}>
            Huseyn Mammadov
          </Text>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesomeIcon icon={faUser} size={24} />

            <Text style={{fontSize: 20, fontWeight: '300'}}>Username</Text>
          </View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '300',
              marginLeft: 24,
              marginBottom: 20,
            }}>
            huseynmv@yahoo.com
          </Text>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesomeIcon icon={faUser} size={24} />

            <Text style={{fontSize: 20, fontWeight: '300'}}>Username</Text>
          </View>

          <Text
            style={{
              fontSize: 22,
              fontWeight: '300',
              marginLeft: 24,
              marginBottom: 20,
            }}>
            huseyn_mammadov
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
