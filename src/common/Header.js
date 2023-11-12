import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>GroceryApp</Text>

      <TouchableOpacity style={styles.button}>
        <Text>Mode</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderBottomColor: '#8e8e8e',
    backgroundColor: '#fff',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#c98510',
    marginLeft: 20,
  },
  button: {
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 30,
  },
});
