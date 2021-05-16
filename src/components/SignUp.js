import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { AppContext } from '../contexts/AppContext';

function SingUp(props) {
    const [text, setText] = useState('');
    const { register } = useContext(AppContext);
    const [userInfo, setUserInfo] = useState({
        email: '',
        name:'',
        password: '',
        phone:'',
        address:''
    });
    let onRegister=()=>{
        register(userInfo);
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 35 }}>
            <View style={{ width: '90%' }}>
                <TextInput
                    mode="outlined"
                    label="Họ và tên"
                    value={userInfo.name}
                    onChangeText={name => setUserInfo({ ...userInfo, name })}>
                </TextInput>
                <TextInput
                    mode="outlined"
                    label="Email"
                    value={userInfo.email}
                    onChangeText={email => setUserInfo({ ...userInfo, email })}>
                </TextInput>
                <TextInput
                    mode="outlined"
                    label="Số điện thoại"
                    value={userInfo.phone}
                    onChangeText={phone => setUserInfo({ ...userInfo, phone })}>
                </TextInput>
                <TextInput
                    mode="outlined"
                    label="Địa chỉ"
                    value={userInfo.address}
                    onChangeText={address => setUserInfo({ ...userInfo, address })}>
                </TextInput>
                <TextInput
                    mode="outlined"
                    label="Mật khẩu"
                    value={userInfo.password}
                    onChangeText={password => setUserInfo({ ...userInfo, password })}>
                </TextInput>
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