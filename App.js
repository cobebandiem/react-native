import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import CartsContainer from './src/containers/CartsContainer';
import Profile from './src/screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignIn from './src/components/SignIn';
import Loading from './src/components/Loading';
import Login from './src//components/Login';
import SignUp from './src/components/SignUp';
import HomeScreen from './src/screens/HomeScreen';
import AppContextProvider from './src/contexts/AppContext';
// const Stack=createStackNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = (props) => {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={Login} options={{ title: 'PhoneShop', headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'PhoneShop' }} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'PhoneShop', headerShown: false }} />
          <Stack.Screen name="Loading" component={Loading} options={{ title: 'Loading', headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>

    // <Home/>
    // <AppContextProvider>
    //   <NavigationContainer>
    //     {/* <Stack.Navigator>
    //         <Stack.Screen name="Home" component={Home} options={{title: 'Trang chủ'}}/>
    //         <Stack.Screen name="Details" component={Details}  options={{title: 'Chi tiết sản phẩm'}}/>
    //     </Stack.Navigator> */}
    //     <Tab.Navigator
    //       screenOptions={({ route }) => ({
    //         tabBarIcon: ({ focused, color, size }) => {
    //           let iconName;
    //           if (route.name === 'Home') {
    //             iconName = "home";
    //           } else if (route.name === 'Cart') {
    //             iconName = 'shopping-cart';
    //           }else if (route.name === 'Profile') {
    //             iconName = 'user-circle';
    //           }
    //           // You can return any component that you like here!
    //           return <Icon name={iconName} size={20} />;
    //         },
    //       })}
    //       tabBarOptions={{
    //         activeTintColor: 'tomato',
    //         inactiveTintColor: 'gray',
    //       }}>
    //       <Tab.Screen name="Home" component={Home}/>
    //       <Tab.Screen name="Cart" component={CartsContainer} options={{tabBarBadge:5}}/>
    //       <Tab.Screen name="Profile" component={Profile}/>
    //     </Tab.Navigator>
    //   </NavigationContainer>
    // </AppContextProvider>
    //<Phones/>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //       <Stack.Screen name="Phones" component={Phones} />
    //       <Stack.Screen name="Phone" component={Phone} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
})


export default App;
