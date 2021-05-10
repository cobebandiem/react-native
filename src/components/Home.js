
import React, { useEffect, useState } from 'react';
import {
  FlatList,
} from 'react-native';

import ProductItem from './../components/ProductItem';
const Home =({navigation})=> {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://api-phone-shop.herokuapp.com/')
            .then(response => response.json())
            .then(data => {setProducts(data); console.log(data)})
            .catch(err=> console.log(err))
    })
    return (
        <FlatList
            data={products}
            numColumns={2}
            renderItem={({item})=><ProductItem navigation={navigation} product={item}/>}
            keyExtractor={item=>`${item.id}`}/>
    );
}
export default Home;