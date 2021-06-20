import React, {Component, useState, useRef} from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import {Text, Image} from 'react-native-elements';
import FloatingLabel from '../../components/FloatingLabel';
import FloatingLabelPass from '../../components/FloatingLabelPass';
import {Navigation} from 'react-native-navigation';
import PagerView from 'react-native-pager-view';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const SignUpScreen = props => {
  const pager = useRef(null);

  const nextPage = page => {
    if (page == 0) pager.current.setPage(1);
    else {
      Navigation.push(props.componentId, {
        component: {
          name: 'Home',
        },
      });
    }
  };

  const prevPage = () => {
    pager.current.setPage(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logintextcontainer}>
        <TouchableOpacity
          onPress={() => {
            Navigation.pop(props.componentId);
          }}>
          <Text style={styles.logintext}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.signuptext}>SignUp</Text>
      </View>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        scrollEnabled={false}
        ref={pager}>
        <View key="1" style={styles.pagerItem}>
          <Screen1 next={nextPage} />
        </View>
        <View key="2" style={styles.pagerItem}>
          <Screen2 prev={prevPage} next={nextPage}></Screen2>
        </View>
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '100%',
    flexDirection: 'column',
    flex: 1,
  },
  logintextcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  logintext: {
    padding: 10,
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#ddd',
    alignContent: 'flex-start',
  },
  signuptext: {
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 20,
  },
  pagerView: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  pagerItem: {
    alignItems: 'center',
  },
});

export default SignUpScreen;
