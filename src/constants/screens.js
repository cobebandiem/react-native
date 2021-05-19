import React from 'react';
import LoadingContainer from './../containers/LoadingContainer';
import SignInContainer from './../containers/SignInContainer';
import SignUpContainer from './../containers/SignUpContainer';
import AppScreen from './../screens/AppScreen';
import { useTranslation } from 'react-i18next';

export const screensApp = () => {
  const { t, i18n } = useTranslation();
  let screensAppData =[
    {
      name: 'SignIn',
      component: ({ navigation }) => <SignInContainer navigation={navigation} />,
      title: 'PhoneShop',
      headerShown: false
    },
    {
      name: 'SignUp',
      component: () => <SignUpContainer />,
      title: `${t('SignUp')}`,
      headerShown: true
    },
    {
      name: 'AppScreen',
      component: () => <AppScreen />,
      title: 'PhoneShop',
      headerShown: false
    },
    {
      name: 'Loading',
      component: ({ navigation }) => <LoadingContainer navigation={navigation} />,
      title: 'Loading',
      headerShown: false
    }
  ];
  return screensAppData;
}