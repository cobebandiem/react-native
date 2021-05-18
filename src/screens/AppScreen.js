import 'react-native-gesture-handler';
import React, { useContext, useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import CartsContainer from '../containers/CartsContainer';
import ProfileScreen from './ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppContext } from '../contexts/AppContext';
const Tab = createBottomTabNavigator();

const AppScreen = (props) => {
  const { fetchCarts, carts } = useContext(AppContext);
  const [cartsList, setCartsList] = useState([]);
  useEffect(() => {
    fetchCarts();
    setCartsList(carts)
  }, []);
  useEffect(() => {
    setCartsList(carts)
  }, [carts]);
  let amountCarts = 0;
  cartsList.map((cart) => {
    amountCarts += cart.quantityOrder;
  })
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = "home";
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Profile') {
            iconName = 'user-circle';
          }
          return <Icon name={iconName} size={20} color={focused ? '#2f95dc' : 'gray'} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#2f95dc',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartsContainer} options={{ tabBarBadge: amountCarts }} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppScreen;
