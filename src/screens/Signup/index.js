import React, {Component, useState} from 'react';
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

const SignUpScreen = () => {
  const [email, setemail] = useState('');
  const [phoneNum, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [cpass, setCpass] = useState('');
  function validateEmail(email) {
    const re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
  }
  function validatePhnum(phnum) {
    const phoneno = /^\d{10}$/;
    return phoneno.test(phnum);
  }
  const getName = _name => {
    setName(_name);
  };
  const getEmail = e_mail => {
    setemail(e_mail);
  };
  const getPhnum = phNum => {
    console.log(phNum);
    setPhone(phNum);
  };
  const getPass = _pass => {
    setPassword(_pass);
  };
  const getCpass = _cpass => {
    setPassword(_cpass);
  };
  const register = () => {
    if (validateEmail(email) && validatePhnum(phoneNum) && password === cpass) {
      console.log('registered');
    } else {
      console.log('error');
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View style={styles.logintextcontainer}>
          <Text style={styles.signuptext}>Sign Up</Text>
          <Text style={styles.logintext}>Login</Text>
        </View>

        <View style={styles.collection}>
          <View style={styles.profileImgView}>
            <Image
              source={require('../../assests/images/profile_img.png')}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.inputContainer}>
            <FloatingLabel
              inputLabel="Name"
              hints="Enter your Full Name"
              initialState=""
              styleSheet={styles.emailInput}
              callback={getName}
            />
            <FloatingLabel
              inputLabel="Phone Number"
              hints="Enter your 10 digit phone Number"
              initialState=""
              styleSheet={{...styles.emailInput, marginTop: 40}}
              callback={getPhnum}
            />
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
          <TouchableOpacity
            style={styles.touchcontainer}
            underlayColor="#ccc"
            activeOpacity={0.6}
            onPress={register}>
            <View style={styles.btnStyle}>
              <Text style={styles.loginbtn}>REGISTER</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    top: 0,
    position: 'absolute',
    justifyContent: 'space-between',
  },
  logintext: {
    padding: 10,
    fontSize: 20,
    marginRight: 20,
    fontWeight: 'bold',
    color: '#ddd',
  },
  signuptext: {
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
    alignContent: 'flex-start',
  },
  collection: {
    width: '85%',
    alignSelf: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  profileImgView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    width: 110,
    height: 110,
  },
  inputContainer: {
    width: '100%',
    marginTop: 20,
  },
  emailInput: {
    width: '100%',
    marginTop: 40,
  },
  passInput: {
    width: '100%',
    marginTop: 40,
  },
  touchcontainer: {
    width: '75%',
    backgroundColor: 'white',
    marginTop: 70,
  },
  btnStyle: {
    alignItems: 'center',
    shadowColor: '#ddd',
    shadowOffset: {width: 2, height: 2},
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 8,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  loginbtn: {
    padding: 15,
    fontSize: 17,
    color: '#191970',
  },
});

export default SignUpScreen;
