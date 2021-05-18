
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailsContainer from './../containers/ProductDetailsContainer';
import ProductsContainer from '../containers/ProductsContainer';
const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductsContainer} options={{ title: 'Trang chủ' }} />
      <Stack.Screen name="Details" component={ProductDetailsContainer} options={{ title: 'Chi tiết sản phẩm' }} />
    </Stack.Navigator>
  );
}
export default HomeScreen;