import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import CartsContainer from './../containers/CartsContainer';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab= createBottomTabNavigator();

const HomeScreen =(props)=> {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
            iconName = "home";
            } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
            }else if (route.name === 'Profile') {
            iconName = 'user-circle';
            }
            return <Icon name={iconName} size={20} />;
        },
        })}
        tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Cart" component={CartsContainer} options={{tabBarBadge:5}}/>
        <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
  );
};

export default HomeScreen;
