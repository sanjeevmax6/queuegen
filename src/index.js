import {Navigation} from 'react-native-navigation';
import LoginScreen from './screens/Login';
import SignUp from './screens/Signup';
import Home from './screens/Home';

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

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: 'white',
  },
  topBar: {
    visible: false,
  },
  // hardwareBackButton: {
  //   popStackOnPress: false,
  // },
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
        enabled: false,
        translationY: {
          from: 0,
          to: 1,
          duration: 3,
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
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(loginRoot);
});
