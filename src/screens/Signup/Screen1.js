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
import FloatingLabel from '../../components/FloatingLabel';

const Screen1 = props => {
  const [phoneNum, setPhone] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [addr, setaddr] = useState('');
  function validatePhnum(phnum) {
    const phoneno = /^\d{10}$/;
    return phoneno.test(phnum);
  }
  const getFname = _name => {
    setFname(_name);
  };
  const getLname = _name => {
    setLname(_name);
  };
  const getPhnum = phNum => {
    setPhone(phNum);
  };
  const getAdd = addr => {
    setaddr(addr);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={styles.collection}>
      <KeyboardAvoidingView style={styles.collection} behavior="height">
        <View style={{...styles.collection, width: '85%'}}>
          <Text style={styles.pertext}>Personal Details</Text>
          <View style={{...styles.inputContainer}}>
            <FloatingLabel
              inputLabel="First Name"
              hints="Enter your First Name"
              initialState=""
              style={styles.emailInput}
              callback={getFname}
            />
            <FloatingLabel
              inputLabel="Last Name"
              hints="Enter your Last Name"
              initialState=""
              styleSheet={{...styles.emailInput, marginTop: 40}}
              callback={getLname}
            />
            <FloatingLabel
              inputLabel="Phone Number"
              hints="Enter your 10 digit phone Number"
              initialState=""
              styleSheet={{...styles.emailInput, marginTop: 40}}
              callback={getPhnum}
            />
            <FloatingLabel
              inputLabel="Address"
              hints="Enter your Residential/Office address"
              initialState=""
              styleSheet={{...styles.emailInput, marginTop: 40}}
              callback={getAdd}
            />
          </View>
          <View
            style={styles.nextContainer}
            onPress={() => {
              console.log('click');
              props.next();
            }}>
            <Image
              source={require('../../assests/images/right-arrow.png')}
              style={styles.nextImg}
              onPress={() => {
                console.log('click');
                props.next();
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
  pertext: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 40,
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
    right: '0%',
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
});

export default Screen1;
