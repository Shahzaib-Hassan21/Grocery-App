import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let isValid = true;
const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [badName, setBadName] = useState(false);
  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [mobile, setMobile] = useState('');
  const [badMobile, setBadMobile] = useState();
  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmBadPassword, setConfirmBadPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const signupp = () => {
    setButtonDisabled(true);
    if (name == '') {
      setBadName(true);
      setButtonDisabled(false);
    } else {
      setBadName(false);
      if (email == '') {
        setBadEmail(true);
        setButtonDisabled(false);
      } else {
        setBadEmail(false);
        if (mobile == '') {
          setBadMobile(true);
          setButtonDisabled(false);
        } else if (mobile.length < 10) {
          setBadMobile(true);
          setButtonDisabled(false);
        } else {
          setBadMobile(false);
          if (password == '') {
            setBadPassword(true);
            setButtonDisabled(false);
          } else {
            setBadPassword(false);
            if (confirmPassword == '') {
              setConfirmBadPassword(true);
              setButtonDisabled(false);
            } else {
              setConfirmBadPassword(false);
              if (password !== confirmPassword) {
                setConfirmBadPassword(true);
                setButtonDisabled(false);
              } else {
                setConfirmBadPassword(false);
                saveData();
              }
            }
          }
        }
      }
    }
  };
  const saveData = async () => {
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('MOBILE', mobile);
    await AsyncStorage.setItem('PASSWORD', password);
    // console.log(':yes');
    navigation.goBack();
  };

  return (
    <ScrollView
      style={styles.container}
      keyboardDismissMode="ondrag"
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={require('../images/grocery-cart.png')}
          style={styles.image}
        />
        <Text style={styles.loginText}>Create New Account</Text>
        <CustomTextInput
          placeholder={'Enter Name'}
          value={name}
          onChangeText={txt => {
            setName(txt);
          }}
          icon={require('../images/user.png')}
        />
        {badName === true && (
          <Text style={styles.warningText}>Please Enter Name</Text>
        )}
        <CustomTextInput
          placeholder={'Enter Email'}
          value={email}
          onChangeText={txt => {
            setEmail(txt);
          }}
          icon={require('../images/mail.png')}
        />
        {badEmail === true && (
          <Text style={styles.warningText}>Please Enter Email ID</Text>
        )}
        <CustomTextInput
          placeholder={'Enter Number'}
          keyboardType={'number-pad'}
          value={mobile}
          onChangeText={txt => {
            setMobile(txt);
          }}
          icon={require('../images/device.png')}
        />
        {badMobile === true && (
          <Text style={styles.warningText}>Please Enter Mobile Number</Text>
        )}
        <CustomTextInput
          placeholder={'Enter Pass'}
          value={password}
          onChangeText={txt => {
            setPassword(txt);
          }}
          icon={require('../images/pass.png')}
        />
        {badPassword === true && (
          <Text style={styles.warningText}>Please Enter Password</Text>
        )}
        <CustomTextInput
          placeholder={'Enter Confirm Pass'}
          value={confirmPassword}
          onChangeText={txt => {
            setConfirmPassword(txt);
          }}
          icon={require('../images/pass.png')}
          // type={'password'}
        />
        {confirmBadPassword === true && (
          <Text style={styles.warningText}>Please Enter Correct Password</Text>
        )}
        <CommonButton
          title={'Sign Up'}
          bgColor={buttonDisabled ? '#f0d19c' : '#c98510'}
          textColor={'#fff'}
          onPress={() => {
            signupp();
          }}
          disabled={buttonDisabled}
        />
        <Text
          style={styles.newText}
          onPress={() => {
            navigation.goBack('Login');
          }}>
          Already Have an Account ?
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginTop: 100,
  },
  loginText: {
    fontSize: 28,
    alignSelf: 'center',
    color: '#c98510',
    fontWeight: '600',
    marginTop: 30,
  },
  newText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 20,
    marginBottom: 50,
  },
  warningText: {
    marginTop: 10,
    marginLeft: 30,
    color: 'red',
  },
});
