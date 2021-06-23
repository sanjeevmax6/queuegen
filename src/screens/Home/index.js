import React, {Component, useState} from 'react';
import {Alert} from 'react-native';
import {TouchableHighlight} from 'react-native';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import {Text, Image, Header, Button, Overlay} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import {Navigation} from 'react-native-navigation';
import SharedPref from 'react-native-shared-preferences';
import Toast from 'react-native-simple-toast';

const qrDim = Dimensions.get('window').width * 0.57;

const HomeScreen = () => {
  let opacity = new Animated.Value(0);
  const [alertV, setalertV] = useState(false);
  const startQ = () => {
    setalertV(true);
    animate();
  };
  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 400],
  });
  const animate = () => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1200,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = [
    styles.box,
    {
      opacity,
      width: size,
      height: size,
    },
  ];

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

  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    SharedPref.setName('user data');
    SharedPref.removeItem('user');
    Toast.show('Signed Out!');
    Navigation.setRoot(loginRoot);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header
          placement="center"
          leftComponent={
            <Image
              source={require('../../assests/images/profile_img.png')}
              style={styles.profIcon}
              onPress={logout}
            />
          }
          centerComponent={
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Virtual Q</Text>
          }
          rightComponent={
            <Image
              source={require('../../assests/images/qr_scan.png')}
              style={styles.qrIcon}
            />
          }
          containerStyle={styles.header}
          leftContainerStyle={styles.headerItems}
          rightContainerStyle={styles.headerItems}
          centerContainerStyle={styles.headerItems}
          statusBarProps={statusbarStyle}
        />
        <View style={styles.mainContainer}>
          <Image
            source={require('../../assests/images/qr_code.png')}
            style={styles.qrCode}
          />
          <Text style={{fontSize: 19, color: 'black'}}>Id: abc-def-ghi</Text>
          <Text style={styles.nameField}>Name: Apes Stronger Together</Text>
          <Button
            title="Start Virtual Queue"
            type="outline"
            buttonStyle={{borderColor: 'white'}}
            containerStyle={styles.startbtn}
            titleStyle={{fontSize: 19, fontWeight: 'normal'}}
            onPress={startQ}
          />
        </View>
        <TouchableOpacity
          style={styles.footer}
          underlayColor="#eee"
          activeOpacity={0.6}>
          <Text style={styles.joinbtn}>Join a Queue</Text>
        </TouchableOpacity>
        <Overlay
          isVisible={alertV}
          onBackdropPress={() => {
            setalertV(false);
          }}>
          {/* <Animated.View style={animatedStyle}> */}
          <Image
            source={require('../../assests/images/qrscan.gif')}
            style={styles.qrGif}
            resizeMode="cover"
          />
          <Text style={styles.alertMsg}>Creating Virtual Queue ...</Text>
          {/* </Animated.View> */}
        </Overlay>
      </View>
    </TouchableWithoutFeedback>
  );
};
const statusbarStyle = {
  animated: true,
  backgroundColor: '#fffefa',
  barStyle: 'dark-content',
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
  header: {
    top: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  profIcon: {
    width: 40,
    height: 40,
    marginLeft: 12,
  },
  qrIcon: {
    width: 35,
    height: 35,
    marginRight: 12,
  },
  headerItems: {
    flex: 1,
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrCode: {
    width: qrDim,
    height: qrDim,
  },
  nameField: {
    fontSize: 19,
    marginTop: 15,
    color: 'black',
  },
  startbtn: {
    width: qrDim * 1.3,
    padding: 7,
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: 'grey',
    marginTop: 100,
    elevation: 6,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'red',
    shadowRadius: 4,
    shadowOpacity: 0.26,
    marginBottom: 20,
    borderWidth: 2,
    justifyContent: 'center',
  },
  footer: {
    width: '100%',
    bottom: 0,
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: '#eee',
    borderColor: '#eee',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  joinbtn: {
    marginTop: 35,
    marginBottom: 35,
    fontSize: 20,
    color: 'red',
  },
  qrGif: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginHorizontal: 20,
  },
  alertMsg: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
});

export default HomeScreen;
