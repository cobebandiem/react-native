import 'react-native-gesture-handler';
import React,{useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  FlatList
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Phones from './src/screens/Phones';
import Phone from './src/screens/Phone';
import Home from './src/components/Home';
import Details from './src/components/Details';
import callApi from './utils/apiCaller';
const Stack=createStackNavigator();

const App =(props)=> {
  return (
    // <Home/>
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>

    //<Phones/>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //       <Stack.Screen name="Phones" component={Phones} />
    //       <Stack.Screen name="Phone" component={Phone} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};
const styles=StyleSheet.create({
  container:{
    width:'100%'
  }
})


export default App;
