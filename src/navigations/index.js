import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import LoginScreen from '../screens/Login';
import SignUp from '../screens/Signup';

Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('SignUp', () => SignUp);

const loginRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'Login',
          },
        },
      ],
    },
  },
};

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    visible: false,
  },
  // hardwareBackButton: {
  //   popStackOnPress: false,
  // },
  animations: {
    push: {
      content: {
        enter: {
          translationX: {
            from: require('react-native').Dimensions.get('window').width,
            to: 0,
            startDelay: 2,
            duration: 300,
          },
        },
        exit: {
          translationX: {
            from: 0,
            to: -require('react-native').Dimensions.get('window').width,
            duration: 300,
          },
        },
      },
    },
    setRoot: {
      enter: {
        waitForRender: true,
        enabled: false,
        translationY: {
          from: 0,
          to: 1,
          duration: 3,
        },
      },
    },
    pop: {
      content: {
        enter: {
          translationX: {
            from: -require('react-native').Dimensions.get('window').width,
            to: 0,
            duration: 300,
          },
        },
        exit: {
          translationX: {
            from: 0,
            to: require('react-native').Dimensions.get('window').width,
            duration: 300,
          },
        },
      },
    },
  },
});
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(loginRoot);
});
