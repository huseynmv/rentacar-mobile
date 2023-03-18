import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import Onboarding from 'react-native-onboarding-swiper';
import Tab from './src/navigation';
import {store} from './src/features';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  // console.log(AsyncStorage.getItem('favorites'));
  const [isOnboarding, setisOnboarding] = useState<boolean>(true);

  return (
    <>
      {isOnboarding ? (
        <Onboarding
          onDone={() => setisOnboarding(false)}
          onSkip={() => setisOnboarding(false)}
          pages={[
            {
              backgroundColor: 'red',
              title: 'salam',
              subtitle: 'salam subtiitle',
              image: <Image source={require('./src/assets/car.png')} />,
            },
            {
              backgroundColor: 'red',
              title: 'salam2',
              subtitle: 'salam subtiitle',
              image: <Image source={require('./src/assets/car.png')} />,
            },
            {
              backgroundColor: 'red',
              title: 'salam3',
              subtitle: 'salam subtiitle',
              image: <Image source={require('./src/assets/car.png')} />,
            },
          ]}
        />
      ) : (
        <Provider store={store}>
          <NavigationContainer>
            <Tab />
          </NavigationContainer>
        </Provider>
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
