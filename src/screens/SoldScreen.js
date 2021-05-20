
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SoldContainer from '../containers/SoldContainer';
import SoldDetails from './../components/SoldDetails';
import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator();

const SoldScreen = () => {
  const { t, i18n } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="SoldList" component={SoldContainer} options={{ title: `${t('SoldList')}`}} />
      <Stack.Screen name="SoldDetails" component={SoldDetails} options={{ title: `${t('SoldItemDetails')}` }} />
    </Stack.Navigator>
  );
}
export default SoldScreen;