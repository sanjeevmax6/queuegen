import React, {useState} from 'react';
import {View} from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import Icon from 'react-native-vector-icons/FontAwesome';

const FloatingLabelPass = ({inputLabel, hints, styleSheet, ...props}) => {
  const [password, setPassword] = useState('');
  return (
    <View style={styleSheet}>
      <FloatingLabelInput
        label={inputLabel}
        value={password}
        staticLabel
        hintTextColor={'#aaa'}
        hint={hints}
        containerStyles={{
          borderWidth: 2,
          paddingHorizontal: 10,
          backgroundColor: '#fff',
          borderColor: '#000',
          borderRadius: 8,
        }}
        customLabelStyles={{
          colorFocused: 'black',
          fontSizeFocused: 12,
        }}
        labelStyles={{
          backgroundColor: '#fff',
          paddingHorizontal: 5,
        }}
        inputStyles={{
          color: 'black',
          paddingHorizontal: 10,
        }}
        isPassword
        customShowPasswordComponent={
          <Icon name="eye-slash" size={24} color="black" />
        }
        style={{marginTop: 30}}
        customHidePasswordComponent={
          <Icon name="eye" size={24} color="black" />
        }
        onChangeText={value => {
          setPassword(value);
          props.callback(value);
        }}
      />
    </View>
  );
};
export default FloatingLabelPass;

{
  /* <FloatingLabelInput
      label={inputLabel}
      value={password}
      staticLabel
      hintTextColor={'#aaa'}
      hint={hints}
      onTogglePassword={bool => {
        console.log(bool);
      }}
      containerStyles={{
        borderWidth: 2,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderRadius: 8,
      }}
      customLabelStyles={{
        colorFocused: 'red',
        fontSizeFocused: 12,
      }}
      labelStyles={{
        backgroundColor: '#fff',
        paddingHorizontal: 5,
      }}
      inputStyles={{
        color: 'black',
        paddingHorizontal: 10,
      }}
      
      
    /> */
}
