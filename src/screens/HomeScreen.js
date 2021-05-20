
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailsContainer from './../containers/ProductDetailsContainer';
import ProductsContainer from '../containers/ProductsContainer';
import { useTranslation } from 'react-i18next';
const Stack = createStackNavigator();

const HomeScreen = () => {
  const { t, i18n } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen name="Products" component={ProductsContainer} options={{ title: `${t('Home')}` }} />
      <Stack.Screen name="Details" component={ProductDetailsContainer} options={{ title: `${t('ProductDetails')}` }} />
    </Stack.Navigator>
  );
}
export default HomeScreen;