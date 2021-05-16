import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { AppContext } from '../contexts/AppContext';
import { emailValidator, emptyCheck } from './../utils/validate';

function SingIn(props) {
  const { login, user } = useContext(AppContext);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });
  const { email, password } = userInfo;
  const [validators, setValidators] = useState({
    emailError: '',
    passwordError: ''
  })
  let onSubmit = () => {
    if (emailValidator(email).isValidate && emptyCheck(password, 'Password').isValidate) {
      login(email, password);
    } else {
      setValidators({
        emailError: emailValidator(email).message,
        passwordError: emptyCheck(password, 'Password').message
      })
    }
  }
  let onBlurEmail = () => {
    setValidators({
      ...validators,
      emailError: emailValidator(email).message
    })
  }
  let onBlurPassword = () => {
    setValidators({
      ...validators,
      passwordError: emptyCheck(password, 'Password').message
    })
  }
  useEffect(() => {
    if (user.id) {
      props.navigation.replace('HomeScreen');
    }
  }, [user])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ width: '90%' }}>
        <TextInput
          onBlur={onBlurEmail}
          mode="outlined"
          color='#2f95dc'
          label="Email"
          value={email}
          onChangeText={email => setUserInfo({ ...userInfo, email })}>
        </TextInput>
        <Text style={{ color: 'red', paddingVertical: 3 }}>{validators.emailError}</Text>
        <TextInput
          onBlur={onBlurPassword}
          mode="outlined"
          color='#2f95dc'
          label="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={password => setUserInfo({ ...userInfo, password })}>
        </TextInput>
        <Text style={{ color: 'red', paddingVertical: 3 }}>{validators.passwordError}</Text>
        <Button
          style={{ marginTop: 5, borderRadius: 50 }}
          mode="contained"
          color='#2f95dc'
          onPress={onSubmit}>Đăng nhập</Button>
        <Button
          style={{ marginTop: 10, borderRadius: 50 }}
          mode="outlined"
          color='#2f95dc'
          onPress={() => { props.navigation.navigate('SignUp') }}>Đăng ký</Button>
      </View>
    </View>
  );
}

export default SingIn;