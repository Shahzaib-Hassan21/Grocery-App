import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../common/Header';
import {products} from '../Product';
import MyProductItem from '../common/MyProductItem';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, addToWishList} from '../redux/actions/Actions';

const Main = () => {
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([]);
  const [freshProduceList, setFreshProduceList] = useState([]);
  const [dairyEggsList, setDairyEggsList] = useState([]);
  const [meatSeaFoodList, setMeatSeaFoodList] = useState([]);
  const [pantryStaplesList, setPantryStaplesList] = useState([]);
  const [snacksSweetsList, setSnacksSweetsList] = useState([]);
  const [beveragesList, setBeveragesList] = useState([]);
  useEffect(() => {
    let tempCategory = [];
    products.category.map(item => {
      tempCategory.push(item);
    });
    setCategoryList(tempCategory);
    setFreshProduceList(products.category[0].data);
    setDairyEggsList(products.category[1].data);
    setMeatSeaFoodList(products.category[2].data);
    setPantryStaplesList(products.category[3].data);
    setSnacksSweetsList(products.category[4].data);
    setBeveragesList(products.category[5].data);
  }, []);

  // const items = useSelector(state => state);
  // console.log(items);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <Header />
        <Image style={styles.img} source={require('../images/banner.jpg')} />
        <View style={styles.flatView}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={styles.flatButton}>
                  <Text style={styles.listText}>{item.category}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.oneList}>Fresh Produce</Text>
        <View style={styles.flatView}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={freshProduceList}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWishList={x => {
                    dispatch(addToWishList(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(x));
                  }}
                />
              );
            }}
          />
        </View>
        <Text style={styles.oneList}>Dairy&Eggs</Text>
        <View style={styles.flatView}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dairyEggsList}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWishList={x => {
                    dispatch(addToWishList(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(x));
                  }}
                />
              );
            }}
          />
        </View>
        <Text style={styles.oneList}>Meat&SeaFood</Text>
        <View style={styles.flatView}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={meatSeaFoodList}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWishList={x => {
                    dispatch(addToWishList(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(x));
                  }}
                />
              );
            }}
          />
        </View>
        <Text style={styles.oneList}>Pantry&Staples</Text>
        <View style={styles.flatView}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={pantryStaplesList}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWishList={x => {
                    dispatch(addToWishList(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(x));
                  }}
                />
              );
            }}
          />
        </View>
        <Text style={styles.oneList}>Snacks&Sweets</Text>
        <View style={styles.flatView}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={snacksSweetsList}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWishList={x => {
                    dispatch(addToWishList(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(x));
                  }}
                />
              );
            }}
          />
        </View>
        <Text style={styles.oneList}>Beverages</Text>
        <View style={styles.flatView}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={beveragesList}
            renderItem={({item, index}) => {
              return (
                <MyProductItem
                  item={item}
                  onAddWishList={x => {
                    dispatch(addToWishList(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(x));
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingBottom: 80,
  },
  img: {
    width: '94%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  flatButton: {
    padding: 10,
    borderWidth: 1,
    marginLeft: 20,
    borderRadius: 20,
  },
  flatView: {
    marginTop: 20,
  },
  listText: {
    color: 'black',
  },
  oneList: {
    marginLeft: 20,
    marginTop: 20,
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
});
