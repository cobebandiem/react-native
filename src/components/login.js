import React, { useState } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
function Login(props) {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });
    const { email, password } = userInfo;
    return (
        <ImageBackground source={{ uri: `https://i.pinimg.com/originals/ac/4e/ce/ac4eceb0c4795e6b8457b908a5154454.png` }} style={styles.backgroundContainer}>
            <View style={styles.logoContainer}>
                <Image source={{ uri: `https://logopond.com/logos/d5b065790bd43a09ae337f058124d208.png` }} style={styles.logo} />
                <Text style={styles.logoText}>REACT NATIVE</Text>
            </View>
            <View>
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
                    onPress={()=>{console.log('submit')}}>Đăng nhập</Button>
                <Button
                    style={{ marginTop: 10, borderRadius: 50 }}
                    mode="outlined"
                    color='#2f95dc'
                    onPress={() => { props.navigation.navigate('SignUp') }}>Đăng ký</Button>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 200
    },
    logoContainer: {
        alignItems: 'center',
    },
    logoText: {
        color: 'red',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5
    }
});
export default Login;