import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';

function login(props) {
    return (
        <ImageBackground source={ } style={styles.backgroundContainer}>
            <View style={style.logoContainer}>
                <Image source={ } style={styles.logo} />
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
                    onPress={onSubmit}>Đăng nhập</Button>
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
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 120,
        heigh: 120
    },
    logoContainer: {
        alignItems: 'center',
    },
    logoText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5
    }
});
export default login;