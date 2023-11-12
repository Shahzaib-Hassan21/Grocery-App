import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const MyProductItem = ({item, onAddToCart, onAddWishList}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} />
      <Text style={styles.itemText}>{item.name}</Text>
      <View style={styles.priceView}>
        <Text style={styles.priceText}>{'Rs.' + item.price}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onAddToCart(item);
          }}>
          <Text style={styles.cartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.likeShape} onPress={()=> {
        onAddWishList(item)
      }}>
        <Image
          style={styles.heartImg}
          source={require('../images/heart.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MyProductItem;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    marginLeft: 20,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#fff',
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  itemText: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 7,
    paddingTop: 7,
  },
  likeShape: {
    width: 40,
    height: 40,
    borderRadius: 20,
    elevation: 5,
    position: 'absolute',
    backgroundColor: '#fff',
    top: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartImg: {
    width: 24,
    height: 24,
  },
  cartText: {
    color: 'black',
  },
});
