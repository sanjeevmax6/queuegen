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
import CardFlip from 'react-native-card-flip';

const LoginScreen = ({}) => {
  const [passVisibilty, setpassVisibilty] = useState(false);
  const [passImg, setpassImg] = useState('eye-slash');
  const togglePassword = () => {
    if (passVisibilty) {
      setpassImg('eye-slash');
      setpassVisibilty(false);
    } else {
      setpassImg('eye');
      setpassVisibilty(true);
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding">
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.container}>
          <View style={styles.logintextcontainer}>
            <Text style={styles.logintext}>Login</Text>
            <Text style={styles.signuptext}>Sign Up</Text>
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
                inputLabel="Email Address"
                hints="Enter valid mail Id"
                initialState=""
                style={styles.emailInput}
              />
              <FloatingLabelPass
                inputLabel="Password"
                hints="Enter Password"
                styleSheet={styles.passInput}
              />
            </View>
          </View>

          <View style={styles.btnConatiner}>
            <TouchableOpacity
              style={styles.touchcontainer}
              underlayColor="#ccc"
              activeOpacity={0.6}>
              <View style={styles.btnStyle}>
                <Text style={styles.loginbtn}>LOG IN</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.ortext}>OR</Text>
            <TouchableOpacity
              style={{...styles.touchcontainer, marginTop: 40}}
              activeOpacity={0.6}>
              <View style={styles.btnStyle}>
                <Text style={styles.loginbtn}>LOG IN WITH OTP</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    //   <View style={styless.container}>
    //   <CardFlip style={styless.cardContainer} ref={card => (this.card = card)}>
    //     <TouchableOpacity
    //       activeOpacity={1}
    //       style={[styless.card, styless.card1]}
    //       onPress={() => this.card.flip()}>
    //       <Text style={styless.label}>AB</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       activeOpacity={1}
    //       style={[styless.card, styless.card2]}
    //       onPress={() => this.card.flip()}>
    //       <Text style={styless.label}>CD</Text>
    //     </TouchableOpacity>
    //   </CardFlip>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
    flexDirection: 'column',
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
  profileImgView: {
    marginBottom: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    width: 110,
    height: 110,
  },
  emailInput: {
    width: '100%',
  },
  passInput: {
    width: '100%',
    marginTop: 40,
  },
  collection: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '45%',
  },
  inputContainer: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  loginbtn: {
    padding: 15,
    fontSize: 17,
    color: '#191970',
  },
  btnConatiner: {
    width: '100%',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  touchcontainer: {
    width: '75%',
    backgroundColor: 'white',
  },
  ortext: {
    color: '#bbb',
    marginTop: 40,
  },
});

const styless = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cardContainer: {
    width: 320,
    height: 470,
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 470,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default LoginScreen;
