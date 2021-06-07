import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {Transition} from 'react-native-reanimated'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'

import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/Signup';

const horizontalAnimation = {
  cardStyleInterpolator: ({current, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
};

// const RouteConfigs = {
//   Login: {
//     screen: LoginScreen,
//     navigationOptions: {
//       headerShown: true,
//     },
//   },
//   SignUp: {
//     screen: SignUpScreen,
//     navigationOptions: {
//       headerShown: true,
//     },
//   },
// };

const AuthNavigator = createAnimatedSwitchNavigator(
  {
      Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: true,
    },
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      headerShown: true,
    },
  },
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out 
        type="scale"
        durationMs={130}
        interpolation="linear"
        />
        <Transition.In  type="slide-right" durationMs={400}/>
      </Transition.Together>
    )
  },
);

export default AuthNavigator;
