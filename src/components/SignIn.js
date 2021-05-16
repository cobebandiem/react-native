import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { AppContext } from '../contexts/AppContext';
import {removeAccents} from './../utils/formatString';

function SingIn(props) {
  const { login, user } = useContext(AppContext);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });
  const { email, password } = userInfo;
  let onSubmit = () => {
    login(email, password);
  }
  useEffect(() => {
    if (user.id) {
      props.navigation.replace('HomeScreen');
    }
  }, [user])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 35 }}>
      <View style={{ width: '90%' }}>
        <TextInput
          mode="outlined"
          color='#2f95dc'
          label="Email"
          value={email}
          onChangeText={email => setUserInfo({ ...userInfo, email })}>
        </TextInput>
        <TextInput
          mode="outlined"
          color='#2f95dc'
          label="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={password => setUserInfo({ ...userInfo, password })}>
        </TextInput>
        <Button
          style={{ marginTop: 25, borderRadius: 50 }}
          mode="contained"
          color='#2f95dc'
          onPress={onSubmit}>Đăng nhập</Button>
        <Button
          style={{ marginTop: 10, borderRadius: 50 }}
          mode="outlined"
          color='#2f95dc'
          onPress={() => { props.navigation.navigate('SignUp') }}>Đăng ký</Button>
        <Button
          style={{ marginTop: 10, borderRadius: 50 }}
          mode="outlined"
          onPress={() => { props.navigation.replace('HomeScreen') }}>Go home</Button>
      </View>
    </View>
  );
}

export default SingIn;