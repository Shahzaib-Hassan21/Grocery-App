import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import { useDispatch } from 'react-redux';
import { addAddress } from '../redux/actions/Actions';

const AddAddress = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState('');
  const [pin, setPin] = useState('');
  const dispatch = useDispatch();  


  return (
    <View style={addAddressStyles.container}>
      <View style={addAddressStyles.innerContainer}>
        <TouchableOpacity
          style={addAddressStyles.setBtn}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={addAddressStyles.bImage}
            source={require('../images/back.png')}
          />
        </TouchableOpacity>
      </View>
      <CustomTextInput
        placeholder={'Enter Your City'}
        value={city}
        onChangeText={txt => {
          setCity(txt);
        }}
        icon={require('../images/buildings.png')}
      />
      <CustomTextInput
        placeholder={'Enter Your Pin Code'}
        value={pin}
        keyboardType={'number-pad'}
        onChangeText={txt => {
          setPin(txt);
        }}
        icon={require('../images/password.png')}
      />
      <CommonButton
        title={'Save Address'}
        bgColor={'#c98510'}
        textColor={'#fff'}
        onPress={() => {
          if (city!== '' && pin!== ''){
            dispatch(
              addAddress({city: city, pin: pin})
            );
          }
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default AddAddress;

const addAddressStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  setBtn: {
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
  },
  bImage: {
    height: 28,
    width: 28,
  },
});
