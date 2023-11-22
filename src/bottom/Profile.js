import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

let name = '';
const Profile = () => {
  const navigation = useNavigation();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    name = await AsyncStorage.getItem('NAME');
  };
  return (
    <View style={profileStyles.container}>
      <View style={profileStyles.innerContainer}>
        <Text style={profileStyles.pText}>Profile</Text>
        <TouchableOpacity style={profileStyles.setBtn}>
          <Image
            style={profileStyles.setImg}
            source={require('../images/setting.png')}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={profileStyles.profileImg}
        source={require('../images/profile.png')}
      />
      <Text style={profileStyles.user}>{name}</Text>
      <TouchableOpacity style={profileStyles.addBtn} onPress={()=>{
        navigation.navigate('MyAddress')
      }}>
        <Text>My Address</Text>
      </TouchableOpacity>
      <TouchableOpacity style={profileStyles.orderBtn}>
        <Text>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={profileStyles.offerBtn}>
        <Text>Offers</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const profileStyles = StyleSheet.create({
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
  pText: {
    fontWeight: '600',
    fontSize: 18,
    color: 'black',
    marginLeft: 15,
  },
  setBtn: {
    height: 30,
    width: 30,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  setImg: {
    height: 24,
    width: 24,
  },
  profileImg: {
    height: 80,
    width: 80,
    marginTop: 30,
    alignSelf: 'center',
  },
  user:{
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 18,
    color: 'black'
  },
  addBtn:{
    height: 50,
    width: '90%',
    borderBottomWidth: .3,
    marginTop: 20,
    borderBottomColor: '#8e8e8e',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  orderBtn:{
    height: 50,
    width: '90%',
    borderBottomWidth: .3,
    borderBottomColor: '#8e8e8e',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  offerBtn:{
    height: 50,
    width: '90%',
    borderBottomWidth: .3,
    borderBottomColor: '#8e8e8e',
    justifyContent: 'center',
    alignSelf: 'center'
  }
});
