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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCompass,
  faBookmark,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import AuthStack from './stack/AuthStack';

const Tab = createBottomTabNavigator();

const Index = ({route}: any) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          display: 'flex',
          backgroundColor: '#16161A',
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="DiscoverStack"
        component={DiscoverStack}
        // initialParams={{email: email}}
        options={({route}) => ({
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faCompass} color={color} size={22} />
          ),
          headerShown: false,
          tabBarActiveTintColor: '#2CB67D',
        })}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={({route}) => ({
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faBookmark} color={color} size={22} />
          ),
          tabBarActiveTintColor: '#2CB67D',
        })}
      />
      <Tab.Screen
        name="SearcScreen"
        component={SearchScreen}
        options={({route}) => ({
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faSearch} color={color} size={22} />
          ),
          tabBarActiveTintColor: '#2CB67D',
        })}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({route}) => ({
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon icon={faUser} color={color} size={22} />
          ),
          tabBarActiveTintColor: '#2CB67D',
        })}
      />
    </Tab.Navigator>
  );
};

export default Index;

const styles = StyleSheet.create({});
