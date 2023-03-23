import {
  StyleSheet,
  Text,
  View,
  Image,
  DrawerLayoutAndroidComponent,
} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import Onboarding from 'react-native-onboarding-swiper';
import Tab from './src/navigation';
import {store} from './src/features';
import Login from './src/components/Login';

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
                backgroundColor: '#E5E5E5',
                title: 'Expecto Patronum',
                subtitle:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ',
                image: (
                  <Image source={require('./src/assets/onboarding1.png')} />
                ),
              },
              {
                backgroundColor: '#E5E5E5',
                title: 'We dont need bike',
                subtitle: `Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod`,
                image: (
                  <Image source={require('./src/assets/onboarding2.png')} />
                ),
              },
              {
                backgroundColor: '#E5E5E5',
                title: 'Start your adventure',
                subtitle:
                  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, corrupti facere!',
                image: (
                  <Image source={require('./src/assets/onboarding3.png')} />
                ),
              },
              {
                backgroundColor: '#E5E5E5',
                title: 'Welcome to Iqrv',
                subtitle: `Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod `,
                image: (
                  <Image source={require('./src/assets/onboarding4.png')} />
                ),
              },
            ]}
          />
        </>
      ) : (
        <>
          {isAuthenticated ? (
            <Login />
          ) : (
            <Provider store={store}>
              <NavigationContainer>
                <Tab />
              </NavigationContainer>
            </Provider>
          )}
        </>
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
