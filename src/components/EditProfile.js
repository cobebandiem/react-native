import React, { useState, useEffect, useContext } from 'react';
import { Alert, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { AppContext } from './../contexts/AppContext';

function EditProfile(props) {
  const { user, editUserInfo } = useContext(AppContext);
  const [userInfo, setUserInfo] = useState({
    id: 0,
    name: '',
    phone: '',
    email: '',
    address: ''
  });
  const { name, phone, email, address } = userInfo;
  useEffect(() => {
    setUserInfo(user);
  }, [user]);
  let updateUserInfo = () => {
    if (JSON.stringify(userInfo) === JSON.stringify(user)) {
      Alert.alert('Thông tin của bạn chưa có sự thay đổi!');
    } else {
      editUserInfo(userInfo);
    }
  }
  return (
    <View style={{padding:10}}>
      <TextInput mode='outlined'
        style={{paddingTop:5}}
        label="Họ và tên"
        value={name}
        onChangeText={name => setUserInfo({ ...userInfo, name })}
      />
      <TextInput mode='outlined'
        style={{paddingTop:5}}
        label="Số điện thoại"
        value={phone}
        onChangeText={phone => setUserInfo({ ...userInfo, phone })}
      />
      <TextInput mode='outlined'
        style={{paddingTop:5}}
        label="Email"
        value={email}
        onChangeText={email => setUserInfo({ ...userInfo, email })}
      />
      <TextInput mode='outlined'
        style={{paddingTop:5}}
        label="Địa chỉ"
        value={address}
        onChangeText={address => setUserInfo({ ...userInfo, address })}
      />
      <Button
        style={{ marginTop: 15 }}
        color='#2f95dc'
        mode="contained"
        onPress={updateUserInfo}>
        Lưu thay đổi
            </Button>
    </View>
  );
}

export default EditProfile;