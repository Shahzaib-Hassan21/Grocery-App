import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

let addressList = [];
const MyAddress = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const addressList = useSelector(state => state.AddressReducers);
  console.log(addressList);
  return (
    <View style={addressStyles.container}>
      <View style={addressStyles.innerContainer}>
        <Text style={addressStyles.pText}>My Address</Text>
        <TouchableOpacity
          style={addressStyles.setBtn}
          onPress={() => {
            navigation.navigate('AddAddress');
          }}>
          <Text>Add Address</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={addressList}
        renderItem={({item, index}) => {
          return (
            <View style={addressStyles.showInfo}>
              <Text style={addressStyles.addressData}>
                {'City: ' + item.city}
              </Text>
              <Text style={{marginLeft: 10, marginBottom: 20}}>
                {'PinCode: ' + item.pin}
              </Text>
                <TouchableOpacity style={addressStyles.addressData}>
                  <Text style={{borderWidth: .2, padding: 2,  }}>Delete Address</Text>
                  {/* <Image 
                  style={addressStyles.delImg}
                  source={require('../images/bin.png')}/> */}
                </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyAddress;

const addressStyles = StyleSheet.create({
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
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    padding: 7,
    borderRadius: 10,
  },
  showInfo: {
    width: '100%',
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    borderWidth: 0.4,
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  addressData: {
    marginLeft: 20,
  },
  delImg:{
    height: 30,
    width: 30
  }
});
