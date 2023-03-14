import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DiscoverScreen from '../../screens/Discover';
import DiscoverDetail from '../../screens/Discover/detail';
const Stack = createNativeStackNavigator();

const DiscoverStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} />
      <Stack.Screen name="DiscoverDetail" component={DiscoverDetail} />
    </Stack.Navigator>
  );
};

export default DiscoverStack;
