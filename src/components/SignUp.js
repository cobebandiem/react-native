import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { emailValidator, emptyCheck } from './../utils/validate';
import { useTranslation } from 'react-i18next';

function SingUp(props) {
  const { t, i18n } = useTranslation();
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
    if (emailValidator(email).isValidate && emptyCheck(name, 'Name').isValidate
      && emptyCheck(phone, 'Phone').isValidate && emptyCheck(address, 'Address').isValidate
      && emptyCheck(password, 'Password')) {
      register(userInfo, props.navigation);;
    } else {
      setValidators({
        messageEmail: emailValidator(email, t('EmailEmpty'), t('EmailMalformed')).message,
        messageName: emptyCheck(name, 'Name', t('NotEmpty')).message,
        messagePhone: emptyCheck(phone, 'Phone', t('NotEmpty')).message,
        messageAddress: emptyCheck(address, 'Address', t('NotEmpty')).message,
        messagePassword: emptyCheck(password, 'Password', t('NotEmpty')).message
      })
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 35 }}>
      <View style={{ width: '90%' }}>
        <TextInput
          mode="outlined"
          label="Name"
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
          label="Phone"
          keyboardType="numeric"
          maxLength={10}
          value={phone}
          onChangeText={phone => setUserInfo({ ...userInfo, phone })}>
        </TextInput>
        <Text style={{ color: 'red', paddingVertical: 1 }}>{validators.messagePhone}</Text>
        <TextInput
          mode="outlined"
          label="Address"
          value={address}
          onChangeText={address => setUserInfo({ ...userInfo, address })}>
        </TextInput>
        <Text style={{ color: 'red', paddingVertical: 1 }}>{validators.messageAddress}</Text>
        <TextInput
          mode="outlined"
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={password => setUserInfo({ ...userInfo, password })}>
        </TextInput>
        <Text style={{ color: 'red', paddingVertical: 1 }}>{validators.messagePassword}</Text>
        <Button
          style={{ marginTop: 10, borderRadius: 50 }}
          mode="contained"
          color='#2f95dc'
          onPress={onRegister}>{t('SignUp')}</Button>
      </View>
    </View>
  );
}

export default SingUp;