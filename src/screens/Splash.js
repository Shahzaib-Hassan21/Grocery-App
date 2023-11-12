import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 3000);
  }, []);

  const getData = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    if (email !== null) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/grocery-cart.png')}
        style={styles.image}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5eb5b',
  },
  image: {
    height: 100,
    width: 100,
  },
});
