import React, {useState, useEffect} from 'react';
import {Navigation} from 'react-native-navigation';
import LoginScreen from './screens/Login';
import SignUp from './screens/Signup';
import Home from './screens/Home';
import auth from '@react-native-firebase/auth';
import SharedPref from 'react-native-shared-preferences';

Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('SignUp', () => SignUp);
Navigation.registerComponent('Home', () => Home);

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

const homeRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'Home',
            enabled: false,
          },
        },
      ],
    },
  },
};

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: 'white',
  },
  topBar: {
    visible: false,
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  SharedPref.setName('user data');
  SharedPref.getItem('user', function (user) {
    console.log(user);
    Navigation.setRoot(user == null ? loginRoot : homeRoot);
  });
});
