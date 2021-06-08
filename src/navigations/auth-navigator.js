import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import LoginScreen from '../screens/Signup';
import HomeScreen from '../screens/Home';

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Login: {
    screen: HomeScreen,
  },
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
