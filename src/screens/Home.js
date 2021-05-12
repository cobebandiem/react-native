
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './../screens/Details';
import ProductsContainer from './../containers/ProductsContainer';
import Products from './../components/Products';
const Stack=createStackNavigator();

const Home =()=> {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Products" component={ProductsContainer} options={{title: 'Trang chủ'}}/>
          <Stack.Screen name="Details" component={Details}  options={{title: 'Chi tiết sản phẩm'}}/>
        </Stack.Navigator>
    );
}
export default Home;