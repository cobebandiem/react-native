import React, { useContext, useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import ProductItem from './../components/ProductItem';
import { AppContext } from '../contexts/AppContext';
import { TextInput } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

function ProductsContainer(props) {
  const { t, i18n } = useTranslation();
  const [keySearch, setKeySearch] = useState('');
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
        label={`${t('Search')}`}
        value={keySearch}
        onChangeText={keySearch => { setKeySearch(keySearch); searchProducts(keySearch); }} />
      <FlatList
        data={productsShow}
        numColumns={2}
        renderItem={({ item }) => <ProductItem navigation={navigation} product={item} />}
        keyExtractor={item => `${item.id}`} />
    </View>
  );
}

export default ProductsContainer;
