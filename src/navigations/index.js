// import React, {Component} from "react"
// import {Text, View} from 'react-native'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthNavigator from './auth-navigator'

const RootNavigator = createSwitchNavigator(
    {
        Auth: AuthNavigator,
    },
    {
        initialRouteName: 'Auth',
    },
);

export default createAppContainer(RootNavigator);