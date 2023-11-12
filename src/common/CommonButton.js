import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const CommonButton = ({onPress, title, bgColor, textColor, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, {backgroundColor: bgColor}]}
      onPress={onPress}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
});
