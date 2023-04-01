import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const Index = ({navigation}: any) => {
  return (
    <Onboarding
      onDone={() => {
        navigation.navigate('Login');
      }}
      onSkip={() => {
        navigation.navigate('Login');
      }}
      pages={[
        {
          backgroundColor: '#F0CF69',
          title: 'Your first car with a driver lisence',
          subtitle: 'Meet poeple we jut got their driver lisence ',
          image: (
            <Image source={require('../../../src/assets/Onboarding_1.png')} />
          ),
        },
        {
          backgroundColor: '#B7ABFD',
          title: 'Always there : more than 1000 cars',
          subtitle: `Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod`,
          image: (
            <Image source={require('../../../src/assets/Onboarding_2.png')} />
          ),
        },
        {
          backgroundColor: '#EFB491',
          title: 'Start your adventure',
          subtitle:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, corrupti facere!',
          image: (
            <Image source={require('../../../src/assets/Onboarding_3.png')} />
          ),
        },
        {
          backgroundColor: '#95B6FF',
          title: 'Welcome to Iqrv',
          subtitle: `Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod `,
          image: <Image source={require('../../../src/assets/Img_car4.png')} />,
        },
      ]}
    />
  );
};

export default Index;

const styles = StyleSheet.create({});
