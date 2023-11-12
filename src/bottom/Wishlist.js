import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../common/CartItem';
import {removeFromCart, removeFromWishList} from '../redux/actions/Actions';

const Wishlist = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers2);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <FlatList
        data={cartData}
        renderItem={({item, index}) => {
          return (
            <CartItem
              item={item}
              onRemoveItem={() => {
                dispatch(removeFromWishList(index));
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
