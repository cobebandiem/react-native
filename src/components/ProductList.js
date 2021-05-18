import React, { useEffect, useState } from 'react';
import {
  FlatList,
} from 'react-native';
import ProductItem from './ProductItem';
function Products({ navigation }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://api-phone-shop.herokuapp.com')
      .then(response => response.json())
      .then(data => { console.log(data); setProducts(data) })
      .catch(err => console.log(err))
  }, []);
  return (<FlatList
    data={products}
    numColumns={2}
    renderItem={({ item }) => <ProductItem navigation={navigation} product={item} />}
    keyExtractor={item => `${item.id}`} />);
}

export default Products;