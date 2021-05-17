import React, { useState, useEffect, useContext } from 'react';
import { Alert, View , Text} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { AppContext } from './../contexts/AppContext';
import { emailValidator, emptyCheck } from './../utils/validate';

function EditProfile(props) {
  const { user, editUserInfo,  } = useContext(AppContext);
  const [userInfo, setUserInfo] = useState({
    id: 0,
    name: '',
    phone: '',
    email: '',
    address: ''
  });
  const [validators, setValidators] = useState({
    messageName: '',
    messagePhone: '',
    messageEmail: '',
    messageAddress: ''
  })
  const { name, phone, email, address } = userInfo;
  useEffect(() => {
    setUserInfo(user);
  }, [user]);
  let updateUserInfo = () => {
    if (JSON.stringify(userInfo) === JSON.stringify(user)) {
      Alert.alert('Thông tin của bạn chưa có sự thay đổi!');
    } else {
      editUserInfo(userInfo);
      setValidators({
        messageName: '',
        messagePhone: '',
        messageEmail: '',
        messageAddress: ''
      });
    }
  }
  let onSubmit = () => {
    if (emailValidator(email).isValidate && emptyCheck(name, 'Họ tên').isValidate
      && emptyCheck(phone, 'SDT').isValidate && emptyCheck(address, 'Địa chỉ').isValidate) {
      updateUserInfo();
    } else {
      setValidators({
        messageEmail: emailValidator(email).message,
        messageName: emptyCheck(name, 'Họ tên').message,
        messagePhone: emptyCheck(phone, 'SDT').message,
        messageAddress: emptyCheck(address, 'Địa chỉ').message
      })
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
      <Text style={{ color: 'red', paddingVertical: 3 }}>{validators.messageName}</Text>
      <TextInput mode='outlined'
        style={{paddingTop:5}}
        label="Số điện thoại"
        value={phone}
        onChangeText={phone => setUserInfo({ ...userInfo, phone })}
      />
      <Text style={{ color: 'red', paddingVertical: 3 }}>{validators.messagePhone}</Text>
      <TextInput mode='outlined'
        style={{paddingTop:5}}
        label="Email"
        value={email}
        onChangeText={email => setUserInfo({ ...userInfo, email })}
      />
      <Text style={{ color: 'red', paddingVertical: 3 }}>{validators.messageEmail}</Text>
      <TextInput mode='outlined'
        style={{paddingTop:5}}
        label="Địa chỉ"
        value={address}
        onChangeText={address => setUserInfo({ ...userInfo, address })}
      />
      <Text style={{ color: 'red', paddingVertical: 3 }}>{validators.messageAddress}</Text>
      <Button
        style={{ marginTop: 15 }}
        color='#2f95dc'
        mode="contained"
        onPress={onSubmit}>
        Lưu thay đổi
            </Button>
    </View>
  );
}

export default EditProfile;