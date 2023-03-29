import {
  StyleSheet,
  Text,
  View,
  Image,
  DrawerLayoutAndroidComponent,
} from 'react-native';
import Navigation from './src/navigation/stack/AuthStack';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import Onboarding from 'react-native-onboarding-swiper';
import Tab from './src/navigation';
import {store} from './src/features';
import AuthStack from './src/navigation/stack/AuthStack';

const App = () => {
  const [isOnboarding, setisOnboarding] = useState<boolean>(true);
  const [isAuthenticated, setisAuthenticated] = useState<boolean>(false);

  return (
    <>
      {isOnboarding ? (
        <>
          <Onboarding
            onDone={() => {
              setisAuthenticated(true);
              setisOnboarding(false);
            }}
            onSkip={() => setisOnboarding(false)}
            pages={[
              {
                backgroundColor: '#F0CF69',
                title: 'Your first car with a driver lisence',
                subtitle: 'Meet poeple we jut got their driver lisence ',
                image: (
                  <Image source={require('./src/assets/Onboarding_1.png')} />
                ),
              },
              {
                backgroundColor: '#B7ABFD',
                title: 'Always there : more than 1000 cars',
                subtitle: `Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod`,
                image: (
                  <Image source={require('./src/assets/Onboarding_2.png')} />
                ),
              },
              {
                backgroundColor: '#EFB491',
                title: 'Start your adventure',
                subtitle:
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, corrupti facere!',
                image: (
                  <Image source={require('./src/assets/Onboarding_3.png')} />
                ),
              },
              {
                backgroundColor: '#95B6FF',
                title: 'Welcome to Iqrv',
                subtitle: `Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod `,
                image: <Image source={require('./src/assets/Img_car4.png')} />,
              },
            ]}
          />
        </>
      ) : (
        <>
          <Provider store={store}>
            <NavigationContainer>
              <Navigation />
            </NavigationContainer>
          </Provider>
        </>
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
