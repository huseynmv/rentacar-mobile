import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import DiscoverScreen from '../screens/Discover';
import FavoriteScreen from '../screens/Favorite';
import ProfileScreen from '../screens/Profile';
import SearchScreen from '../screens/Search';
import Icon from 'react-native-vector-icons/FontAwesome';
import DiscoverStack from './stack/DiscoverStack';

const Tab = createBottomTabNavigator();

const Index = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: '#16161A',
        },
      })}>
      <Tab.Screen
        name="DiscoverStack"
        component={DiscoverStack}
        options={({route}) => ({
          tabBarIcon: ({color}) => (
            <Icon name="star-o" size={26} color="white" />
          ),
        })}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={({route}) => ({
          tabBarIcon: ({color}) => <Icon name="home" size={26} color="black" />,
        })}
      />
      <Tab.Screen
        name="SearcScreen"
        component={SearchScreen}
        options={({route}) => ({
          tabBarIcon: ({color}) => <Icon name="home" size={26} color="black" />,
        })}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({route}) => ({
          tabBarIcon: ({color}) => <Icon name="home" size={26} color="black" />,
        })}
      />
    </Tab.Navigator>
  );
};

export default Index;

const styles = StyleSheet.create({});
