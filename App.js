import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingContainer from './src/containers/LoadingContainer';
import SignInContainer from './src/containers/SignInContainer';
import SignUpContainer from './src/containers/SignUpContainer';
import AppScreen from './src/screens/AppScreen';
import AppContextProvider from './src/contexts/AppContext';

import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator();

const App = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignInContainer} options={{ title: 'PhoneShop', headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUpContainer} options={{ title: `${t('SignUp')}` }} />
          <Stack.Screen name="AppScreen" component={AppScreen} options={{ title: 'PhoneShop', headerShown: false }} />
          <Stack.Screen name="Loading" component={LoadingContainer} options={{ title: 'Loading', headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
};

export default App;
