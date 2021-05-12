import React, { useContext, useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import Product from'./../components/Product';
import { AppContext } from '../contexts/AppContext';

function ProductsContainer(props) {
    const {navigation} = props;
    const {products, fetchProducts, searchProducts} = useContext(AppContext);
    useEffect(()=>{
        fetchProducts();
        searchProducts('iphone');
    },[]);
    return (
        <View>
            <FlatList
                data={products}
                numColumns={2}
                renderItem={({item})=><Product navigation={navigation} product={item}/>}
                keyExtractor={item=>`${item.id}`}/>
        </View>
    );
}

export default ProductsContainer;