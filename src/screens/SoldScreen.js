
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SoldContainer from '../containers/SoldContainer';
import ConfirmContainer from '../containers/ConfirmContainer';
import DeliveringContainer from '../containers/DeliveringContainer';
import GetSoldContainer from '../containers/GetSoldContainer';

import { useTranslation } from 'react-i18next';
import CartEmpty from '../components/CartEmpty';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

const SoldScreen = () => {
  const { t, i18n } = useTranslation();
  return (
      <Tab.Navigator initialRouteName="Profile" >
        <Tab.Screen name="Confirm" component={ConfirmContainer} options={{ title: `Chờ xác nhận` }} />
        <Tab.Screen name="Confirm1" component={GetSoldContainer} options={{ title: `Chờ lấy hàng` }} />
        <Tab.Screen name="Confirm2" component={DeliveringContainer} options={{ title: `Đang giao` }} />
        <Tab.Screen name="Confirm3" component={SoldContainer} options={{ title: `Đã giao` }} />
        {/* <Stack.Screen name="SoldList" component={SoldContainer} options={{ title: `${t('SoldList')}`}} />
      <Stack.Screen name="SoldDetails" component={SoldDetails} options={{ title: `${t('SoldItemDetails')}` }} /> */}
      </Tab.Navigator>
  );
}
export default SoldScreen;