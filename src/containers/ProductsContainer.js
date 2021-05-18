import React, { useContext, useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import ProductItem from './../components/ProductItem';
import { AppContext } from '../contexts/AppContext';
import { TextInput } from 'react-native-paper';

function ProductsContainer(props) {
  const [text, setText] = useState('');
  const { navigation } = props;
  const { products, fetchProducts, searchProducts, search, isSearched } = useContext(AppContext);
  let [productsShow, setProductsShow] = useState([]);
  useEffect(() => {
    fetchProducts();
    setProductsShow(products);
  }, []);
  useEffect(() => {
    setProductsShow(products);
  }, [products]);
  useEffect(() => {
    if (isSearched === true) {
      setProductsShow(search);
    } else {
      setProductsShow(products);
    }
  }, [search]);
  return (
    <View style={{ paddingBottom: '16%' }}>
      <TextInput
        style={{ width: '98%', marginLeft: '1%' }}
        mode="outlined"
        label="Tìm kiếm sản phẩm"
        value={text}
        onChangeText={text => { setText(text); searchProducts(text); }} />
      <FlatList
        data={productsShow}
        numColumns={2}
        renderItem={({ item }) => <ProductItem navigation={navigation} product={item} />}
        keyExtractor={item => `${item.id}`} />
    </View>
  );
}

export default ProductsContainer;
