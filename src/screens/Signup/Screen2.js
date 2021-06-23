import React, {Component, useState} from 'react';
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
import Toast from 'react-native-simple-toast';
import FloatingLabel from '../../components/FloatingLabel';
import FloatingLabelPass from '../../components/FloatingLabelPass';

const Screen2 = props => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [cpass, setCpass] = useState('');
  function validateEmail(email) {
    const re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
  }
  const getEmail = e_mail => {
    setemail(e_mail);
  };
  const getPass = _pass => {
    setPassword(_pass);
  };
  const getCpass = _cpass => {
    setPassword(_cpass);
  };

  const register = () => {
    console.log('register');
    if (!validateEmail(email)) Toast.show('Enter valid Email Id');
    else if (password === cpass) Toast.show("Passwords don't match");
    else props.next(email, password);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={styles.collection}>
      <KeyboardAvoidingView style={styles.collection} behavior="height">
        <View style={styles.collection}>
          <Image
            source={require('../../assests/images/profile_img.png')}
            style={styles.profileImg}
          />
          <View style={{...styles.inputContainer, width: '85%'}}>
            <FloatingLabel
              inputLabel="Email Address"
              hints="Enter valid mail Id"
              initialState=""
              styleSheet={{...styles.emailInput, marginTop: 40}}
              callback={getEmail}
            />
            <FloatingLabelPass
              inputLabel="Password"
              hints="Enter Password"
              styleSheet={styles.passInput}
              callback={getPass}
            />
            <FloatingLabelPass
              inputLabel="Confirm Password"
              hints="Re-Enter Password"
              styleSheet={styles.passInput}
              callback={getCpass}
            />
          </View>
          <View
            style={{...styles.nextContainer, right: '7%'}}
            onPress={register}>
            <Image
              source={require('../../assests/images/check.png')}
              style={styles.nextImg}
              onPress={register}
            />
          </View>
          <View
            style={{...styles.nextContainer, left: '7%'}}
            onPress={() => {
              props.prev();
            }}>
            <Image
              source={require('../../assests/images/left-arrow.png')}
              style={styles.nextImg}
              onPress={() => {
                props.prev();
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  collection: {
    width: '100%',
    alignItems: 'center',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  profileImg: {
    width: 110,
    height: 110,
  },
  inputContainer: {
    width: '100%',
    marginTop: 60,
    paddingBottom: '40%',
  },
  emailInput: {
    width: '100%',
  },
  nextContainer: {
    bottom: '10%',
    padding: 20,
    position: 'absolute',
    shadowColor: '#ddd',
    shadowOffset: {width: 2, height: 2},
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 8,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  nextImg: {
    width: 30,
    height: 30,
  },
  passInput: {
    width: '100%',
    marginTop: 40,
  },
});

export default Screen2;
