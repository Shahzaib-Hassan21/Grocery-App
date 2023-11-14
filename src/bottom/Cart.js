import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../common/CartItem';
import {addToWishList, removeFromCart} from '../redux/actions/Actions';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <FlatList
        data={cartData}
        renderItem={({item, index}) => {
          return (
            <CartItem
              onAddWishList={x => {
                dispatch(addToWishList(x));
              }}
              item={item}
              onRemoveItem={() => {
                dispatch(removeFromCart(index));
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
