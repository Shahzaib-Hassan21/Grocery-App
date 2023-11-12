import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Main from '../bottom/Main';
import Search from '../bottom/Search';
import Cart from '../bottom/Cart';
import Wishlist from '../bottom/Wishlist';
import Profile from '../bottom/Profile';
import { useSelector } from 'react-redux';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const reducersSelector = state => state.Reducers;
  const reducers2Selector = state => state.Reducers2;

  const reducersData = useSelector(reducersSelector);
  const reducers2Data = useSelector(reducers2Selector);
  // const data = useSelector(state=>state);


  return (
    <View style={styles.conatiner}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.bottomNav}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            style={[
              styles.icon,
              {tintColor: selectedTab == 0 ? 'black' : '#c98510'},
            ]}
            source={require('../images/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomNav}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            style={[
              styles.icon,
              {tintColor: selectedTab == 1 ? 'black' : '#c98510'},
            ]}
            source={require('../images/search.png')}
          />
        </TouchableOpacity>
        <View style={styles.centerView}>
          <TouchableOpacity
            style={[
              styles.centerShape,
              {backgroundColor: selectedTab === 2 ? '#fadba5' : '#c98510'},
            ]}
            onPress={() => {
              setSelectedTab(2);
            }}>
            <Image
              style={styles.cartIcon}
              source={require('../images/shopping-bag.png')}
            />
            <View style={styles.cartCounter}><Text style={styles.cartText}>{reducersData.length}</Text></View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.bottomNav}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            style={[
              styles.icon,
              {tintColor: selectedTab == 3 ? 'black' : '#c98510'},
            ]}
            source={require('../images/heart.png')}
          />
           <View style={styles.wishCounter}><Text style={styles.wishText}>{reducers2Data.length}</Text></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomNav}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            style={[
              styles.icon,
              {tintColor: selectedTab == 4 ? 'black' : '#c98510'},
            ]}
            source={require('../images/user.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  bottomContainer: {
    width: '98%',
    height: 70,
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomNav: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  centerView: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerShape: {
    width: 44,
    height: 44,
    borderRadius: 22,
    // backgroundColor:'#c98510',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  cartCounter: {
    width: 18,
    height: 18,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    top: 5,
    right: 5,
  },
  cartText:{
    fontWeight: '600',
    color: '#fff',
  },
  wishCounter:{
    width: 18,
    height: 18,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    top: 15,
    right: 20,
  },
  wishText:{
    fontWeight: '600',
    color: '#fff',
  },
});
