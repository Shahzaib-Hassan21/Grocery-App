import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React from 'react';

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  icon,
  type,
  keyboardType,
}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <TextInput
        value={value}
        keyboardType={keyboardType ? keyboardType : 'default'}
        onChangeText={txt => {
          onChangeText(txt);
        }}
        placeholder={placeholder}
        style={styles.textInput}
        secureTextEntry={type ? true : false}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 45,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    height: 25,
    width: 25,
  },
  textInput: {
    marginLeft: 10,
  },
});
