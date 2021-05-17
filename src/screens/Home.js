
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './../screens/Details';
import ProductsContainer from './../containers/ProductsContainer';
import EditProfile from './../components/EditProfile';
import SoldContainer from './../containers/SoldContainer';
const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductsContainer} options={{ title: 'Trang chủ' }} />
      <Stack.Screen name="Details" component={Details} options={{ title: 'Chi tiết sản phẩm' }} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{ title: 'Chỉnh sửa thông tin' }} />
      <Stack.Screen name="Sold" component={SoldContainer} options={{ title: 'Đơn mua' }} />
    </Stack.Navigator>
  );
}
export default Home;