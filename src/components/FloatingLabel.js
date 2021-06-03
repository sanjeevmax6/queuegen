import React, {useState} from 'react';
import {FloatingLabelInput} from 'react-native-floating-label-input';

const FloatingLabel = ({inputLabel, hints, initialState}) => {
  const [val, setval] = useState(initialState);
  const [borderColor, setborderColor] = useState('#fff');
  return (
    <FloatingLabelInput
      label={inputLabel}
      value={val}
      staticLabel
      onFocus={() => {
        setborderColor('#000');
      }}
      onBlur={() => {
        setborderColor('#fff');
      }}
      hintTextColor={'#aaa'}
      hint={hints}
      containerStyles={{
        borderWidth: 2,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderColor: {borderColor},
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
      onChangeText={value => {
        setval(value);
      }}
    />
  );
};

export default FloatingLabel;
