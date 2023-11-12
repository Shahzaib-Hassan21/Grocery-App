import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../common/Loader';
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const login = () => {
    setModalVisible(true);
    if(email == ''){
      setModalVisible(false);
      setBadEmail(true)
    }
    else{
      setBadEmail(false)
    if(password == ''){
      setModalVisible(false);
      setBadPassword(true)
    }
    else{
     setTimeout(()=>{
      setBadPassword(false)
      getData();
     }, 2000) 
    }
  }
  }
  const getData = async () =>{
    const mEmail = await AsyncStorage.getItem('EMAIL');
    const mPass = await AsyncStorage.getItem('PASSWORD');
    // console.log(mEmail, mPass)
    if(email === mEmail && mPass === password){
      setModalVisible(false);
      navigation.navigate('Home')
    }
    else{
      setModalVisible(false);
    }
  }
  return (
    <ScrollView 
    keyboardDismissMode="ondrag" 
    style={styles.container}>
      <View 
      style={styles.container}>
        <Image
          source={require('../images/grocery-cart.png')}
          style={styles.image}
        />
        <Text style={styles.loginText}>Login</Text>
        <CustomTextInput
          placeholder={'Enter Email'}
          icon={require('../images/mail.png')}
          value={email}
          onChangeText={txt => {
            setEmail(txt);
          }}
        />
        {badEmail === true && (
          <Text style={styles.warningText}>Please Enter Email ID</Text>
        )}
        <CustomTextInput
          placeholder={'Enter Pass'}
          icon={require('../images/pass.png')}
          type={'password'}
          value={password}
          onChangeText={txt => {
            setPassword(txt);
          }}
        />
        {badPassword === true && <Text style={styles.warningText}>Please Enter Password</Text>}
        <CommonButton
          title={'Login'}
          bgColor={'#c98510'}
          textColor={'#fff'}
          onPress={() => {
            login();
          }}
        />
        <Text
          style={styles.newText}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          Create New Account ?
        </Text>
        <Loader  modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      </View>
    </ScrollView>
  );
};

export default Login;

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
    marginTop: 50,
  },
  newText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
  warningText: {
    marginTop: 10,
    marginLeft: 30,
    color: 'red',
  },
});
