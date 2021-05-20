
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileContainer from '../containers/ProfileContainer';
import SoldScreen from '../screens/SoldScreen';
import EditProfileContainer from '../containers/EditProfileContainer';
import ChangePasswordContainer from '../containers/ChangePasswordContainer';
import { useTranslation } from 'react-i18next';
import SettingContainer from '../containers/SettingContainer';

const Stack = createStackNavigator();

const ProfileScreen = () => {
  const { t, i18n } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={ProfileContainer} options={{ title: `${t('InformationUser')}` }} />
      <Stack.Screen name="EditProfile" component={EditProfileContainer} options={{ title: `${t('UserProfile')}` }} />
      <Stack.Screen name="Sold" component={SoldScreen} options={{ title: `${t('BoughtProduct')}`, headerShown:false }} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordContainer} options={{ title: `${t('ChangePassword')}` }} />
      <Stack.Screen name="Setting" component={SettingContainer} options={{ title: `${t('Setting')}` }} />
    </Stack.Navigator>
  );
}
export default ProfileScreen;