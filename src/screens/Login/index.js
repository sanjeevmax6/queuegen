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
import {Navigation} from 'react-native-navigation';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';
import UserModel from '../../model/UserModel';
import SharedPref from 'react-native-shared-preferences';

const LoginScreen = props => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const homeRoot = {
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
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
    animations: {
      push: {
        content: {
          enter: {
            translationX: {
              from: require('react-native').Dimensions.get('window').width,
              to: 0,
              duration: 300,
            },
          },
        },
      },
      setRoot: {
        enter: {
          waitForRender: true,
          enabled: true,
          translationX: {
            from: require('react-native').Dimensions.get('window').width,
            to: 0,
            duration: 300,
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

  const login = () => {
    if (!username || !password) Toast.show('Invalid Credentials');
    else {
      auth()
        .signInWithEmailAndPassword(username, password)
        .then(() => {
          Toast.show('Welcome, ' + username);
          console.log('User signed in!');
          SharedPref.setName('user data');
          SharedPref.setItem('user', username);
          Navigation.setRoot(homeRoot);
        })
        .catch(error => {
          if (error.code === 'auth/auth/invalid-email') {
            Toast.show('Invalid Credentials');
            console.log('That email address is invalid!');
          }

          if (error.code === 'auth/user-disabled') {
            Toast.show('User Disabled');
            console.log('User Disabled');
          }

          if (error.code === 'auth/user-not-found') {
            Toast.show('User not found');
            console.log('User not found');
          }

          if (error.code === 'auth/wrong-password') {
            Toast.show('Invalid Password');
            console.log('Invalid Password');
          }
        });
    }
  };

  const forgotPass = () => {
    if (!username) Toast.show('Invalid Email Id');
    else {
      auth()
        .sendPasswordResetEmail(username)
        .then(() => {
          Toast.show('Password reset email sent');
        })
        .catch(error => {
          if (error.code === 'auth/auth/invalid-email') {
            Toast.show('Invalid Credential');
            console.log('That email address is invalid!');
          }
          if (error.code === 'auth/user-not-found') {
            Toast.show('User not found');
            console.log('User not found');
          }
        });
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={{backgroundColor: 'white'}}>
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: 'white'}}
        behavior="height">
        <View style={styles.container}>
          <View style={styles.logintextcontainer}>
            <Text style={styles.logintext}>Login</Text>
            <TouchableOpacity
              onPress={() => {
                Navigation.push(props.componentId, {
                  component: {
                    name: 'SignUp',
                    passProps: {
                      root: homeRoot,
                    },
                  },
                });
              }}>
              <Text style={styles.signuptext}>Sign Up</Text>
            </TouchableOpacity>
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
                callback={email => setusername(email)}
              />
              <FloatingLabelPass
                inputLabel="Password"
                hints="Enter Password"
                styleSheet={styles.passInput}
                callback={pass => setpassword(pass)}
              />
            </View>
            <Text style={styles.forgotText} onPress={forgotPass}>
              Forgot Password?
            </Text>
            <TouchableOpacity
              style={styles.touchcontainer}
              underlayColor="#ccc"
              activeOpacity={0.6}
              onPress={login}>
              <View style={styles.btnStyle}>
                <Text style={styles.loginbtn}>LOG IN</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    marginBottom: '20%',
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
    flex: 1,
    marginBottom: '25%',
  },
  inputContainer: {
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
    borderRadius: 10,
    backgroundColor: 'white',
  },
  forgotText: {
    color: 'blue',
    marginTop: '5%',
    textAlign: 'right',
    alignSelf: 'stretch',
  },
  touchcontainer: {
    width: '100%',
    marginTop: '10%',
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
