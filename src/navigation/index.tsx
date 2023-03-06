import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import DiscoverScreen from '../screens/Discover';
import FavoriteScreen from '../screens/Favorite';
import ProfileScreen from '../screens/Profile';
import SearchScreen from '../screens/Search';
const Tab = createBottomTabNavigator();

const Index = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="DiscoverScreen" component={DiscoverScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      <Tab.Screen name="SearcScreen" component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default Index;

const styles = StyleSheet.create({});
