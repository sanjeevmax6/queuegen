import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const LoginScreen = ({}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View
        style={styles.container}
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.logintextcontainer}>
          <Text style={styles.logintext}>Login</Text>
          <Text style={styles.signuptext}>Sign Up</Text>
        </View>
        <Image
          source={require('../../assests/images/profile_img.png')}
          style={styles.profileImg}
        />
        <TextInput placeholder="Email address" style={styles.emailInput} />
        <View style={styles.passView}>
          <TextInput placeholder="Password" />
          <Image
            source={require('../../assests/images/pass_show.png')}
            style={styles.passImg}
          />
        </View>

        <TouchableOpacity style={styles.touchcontainer}>
          <View style={styles.btnContainer}>
            <Text style={styles.loginbtn}>LOG IN</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.ortext}>OR</Text>
        <TouchableOpacity style={styles.touchcontainer}>
          <View style={styles.btnContainer}>
            <Text style={styles.loginbtn}>LOG IN WITH OTP</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
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
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
    alignContent: 'flex-start',
  },
  signuptext: {
    padding: 10,
    fontSize: 20,
    marginRight: 20,
    fontWeight: 'bold',
    color: '#ddd',
  },
  profileImg: {
    marginTop: 30,
    width: 110,
    height: 110,
  },
  emailInput: {
    marginTop: 30,
    width: '75%',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  passImg: {
    width: 25,
    height: 25,
  },
  passView: {
    width: '75%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  loginbtn: {
    padding: 15,
    fontSize: 17,
    color: '#191970',
  },
  btnContainer: {
    alignItems: 'center',
    shadowColor: '#ddd',
    shadowOffset: {width: 2, height: 2},
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 8,
    borderRadius: 50,
  },
  touchcontainer: {
    width: '75%',
    marginTop: 50,
  },
  ortext: {
    color: '#bbb',
    marginTop: 50,
  },
});

export default LoginScreen;
