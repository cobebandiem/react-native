
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileContainer from '../containers/ProfileContainer';
import SoldContainer from '../containers/SoldContainer';
import EditProfileContainer from '../containers/EditProfileContainer';
import ChangePasswordContainer from '../containers/ChangePasswordContainer';
const Stack = createStackNavigator();

const ProfileScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={ProfileContainer} options={{ title: 'Thông tin cá nhân' }} />
      <Stack.Screen name="EditProfile" component={EditProfileContainer} options={{ title: 'Chỉnh sửa thông tin' }} />
      <Stack.Screen name="Sold" component={SoldContainer} options={{ title: 'Đơn mua' }} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordContainer} options={{ title: 'Thay đổi mật khẩu' }} />
    </Stack.Navigator>
  );
}
export default ProfileScreen;