import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { emailValidator, emptyCheck } from './../utils/validate';

function SingUp(props) {
  const { register } = props;
  const [validators, setValidators] = useState({
    messageName: '',
    messagePhone: '',
    messageEmail: '',
    messageAddress: '',
    messagePassword: ''
  })
  const [userInfo, setUserInfo] = useState({
    email: '',
    name: '',
    password: '',
    phone: '',
    address: ''
  });
  const { name, phone, email, address, password } = userInfo;
  let onRegister = () => {
    if (emailValidator(email).isValidate && emptyCheck(name, 'Họ tên').isValidate
      && emptyCheck(phone, 'SDT').isValidate && emptyCheck(address, 'Địa chỉ').isValidate
      && emptyCheck(password, 'Mật khẩu')) {
      register(userInfo);;
    } else {
      setValidators({
        messageEmail: emailValidator(email).message,
        messageName: emptyCheck(name, 'Họ tên').message,
        messagePhone: emptyCheck(phone, 'SDT').message,
        messageAddress: emptyCheck(address, 'Địa chỉ').message,
        messagePassword: emptyCheck(password, 'Mật khẩu').message
      })
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 35 }}>
      <View style={{ width: '90%' }}>
        <TextInput
          mode="outlined"
          label="Họ và tên"
          value={name}
          onChangeText={name => setUserInfo({ ...userInfo, name })}>
        </TextInput>
        <Text style={{ color: 'red', paddingVertical: 1 }}>{validators.messageName}</Text>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={email => setUserInfo({ ...userInfo, email })}>
        </TextInput>
        <Text style={{ color: 'red', paddingVertical: 1 }}>{validators.messageEmail}</Text>
        <TextInput
          mode="outlined"
          label="Số điện thoại"
          keyboardType="numeric"
          maxLength={10}
          value={phone}
          onChangeText={phone => setUserInfo({ ...userInfo, phone })}>
        </TextInput>
        <Text style={{ color: 'red', paddingVertical: 1 }}>{validators.messagePhone}</Text>
        <TextInput
          mode="outlined"
          label="Địa chỉ"
          value={address}
          onChangeText={address => setUserInfo({ ...userInfo, address })}>
        </TextInput>
        <Text style={{ color: 'red', paddingVertical: 1 }}>{validators.messageAddress}</Text>
        <TextInput
          mode="outlined"
          label="Mật khẩu"
          value={password}
          onChangeText={password => setUserInfo({ ...userInfo, password })}>
        </TextInput>
        <Text style={{ color: 'red', paddingVertical: 1 }}>{validators.messagePassword}</Text>
        <Button
          style={{ marginTop: 10, borderRadius: 50 }}
          mode="contained"
          color='#2f95dc'
          onPress={onRegister}>Đăng ký</Button>
      </View>
    </View>
  );
}

export default SingUp;