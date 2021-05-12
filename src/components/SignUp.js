import React,{useState} from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

function SingUp(props) {
    const [text,setText]=useState('');
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'flex-start', marginTop:35}}>
        <View style={{width:'90%'}}>
            <TextInput
                mode="outlined"
                label="Họ và tên"
                value={text}
                onChangeText={text => setText(text)}>
            </TextInput>
            <TextInput
                mode="outlined"
                label="Email"
                value={text}
                onChangeText={text => setText(text)}>
            </TextInput>
            <TextInput
                mode="outlined"
                label="Số điện thoại"
                value={text}
                onChangeText={text => setText(text)}>
            </TextInput>
            <TextInput
                mode="outlined"
                label="Địa chỉ"
                value={text}
                onChangeText={text => setText(text)}>
            </TextInput>
            <TextInput
                mode="outlined"
                label="Mật khẩu"
                value={text}
                onChangeText={text => setText(text)}>
            </TextInput>
            <TextInput
                mode="outlined"
                label="Nhập lại mật khẩu"
                value={text}
                onChangeText={text => setText(text)}>
            </TextInput>
            <Button style={{marginTop:10, borderRadius:50}} mode="contained">Đăng ký</Button>
        </View>
    </View>
    );
}

export default SingUp;