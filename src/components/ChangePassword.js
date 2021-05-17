import React, { useState, useEffect, useContext } from 'react';
import { Alert, View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { AppContext } from './../contexts/AppContext';
import { emptyCheck } from './../utils/validate';

function ChangePassword(props) {
    const { changePassword } = useContext(AppContext);
    const [passwords, setPasswords] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [validators, setValidators] = useState({
        oldPasswordMessage: '',
        newPasswordMessage: '',
        confirmPasswordMessage: ''
    })
    const { oldPassword, newPassword, confirmPassword } = passwords;
    let updatePassword = () => {
        if (newPassword !== confirmPassword) {
            Alert.alert('Mật khẩu mới và xác nhận mật khẩu không giống nhau!');
        } else {
            changePassword(passwords);
            setValidators({
                oldPasswordMessage: '',
                newPasswordMessage: '',
                confirmPasswordMessage: ''
            });
        }
    }
    let onSubmit = () => {
        if (emptyCheck(oldPassword, 'Mật khẩu').isValidate && emptyCheck(newPassword, 'Mật khẩu').isValidate && emptyCheck(confirmPassword, 'Mật khẩu').isValidate) {
            updatePassword();
        } else {
            setValidators({
                oldPasswordMessage: emptyCheck(oldPassword, 'Mật khẩu').message,
                newPasswordMessage: emptyCheck(newPassword, 'Mật khẩu').message,
                confirmPasswordMessage: emptyCheck(confirmPassword, 'Mật khẩu').message
            })
            console.log(validators);
        }
    }
    return (
        <View style={{ padding: 10 }}>
            <TextInput mode='outlined'
                style={{ paddingTop: 5 }}
                label="Mật khẩu cũ"
                secureTextEntry={true}
                value={oldPassword}
                onChangeText={oldPassword => setPasswords({ ...passwords, oldPassword })}
            />
            <Text style={{ color: 'red', paddingVertical: 3 }}>{validators.oldPasswordMessage}</Text>
            <TextInput mode='outlined'
                style={{ paddingTop: 5 }}
                label="Mật khẩu mới"
                secureTextEntry={true}
                value={newPassword}
                onChangeText={newPassword => setPasswords({ ...passwords, newPassword })}
            />
            <Text style={{ color: 'red', paddingVertical: 3 }}>{validators.newPasswordMessage}</Text>
            <TextInput mode='outlined'
                style={{ paddingTop: 5 }}
                label="Xác nhận lại mật khẩu"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={confirmPassword => setPasswords({ ...passwords, confirmPassword })}
            />
            <Text style={{ color: 'red', paddingVertical: 3 }}>{validators.confirmPasswordMessage}</Text>
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

export default ChangePassword;