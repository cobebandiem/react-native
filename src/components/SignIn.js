import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { emailValidator, emptyCheck } from './../utils/validate';
function SignIn(props) {
  const { login, isLoading } = props;
  useEffect(() => {
    if (isLoading === true) {
      props.navigation.navigate('Loading');
    }
  }, [isLoading])
  const [userInfo, setUserInfo] = useState({
    email: 'huydu@gmail.com',
    password: '123456'
  });
  const { email, password } = userInfo;
  const [validators, setValidators] = useState({
    emailError: '',
    passwordError: ''
  })
  let onSubmit = () => {
    if (emailValidator(email).isValidate && emptyCheck(password, 'Password').isValidate) {
      login(email, password, props.navigation);
    } else {
      setValidators({
        emailError: emailValidator(email).message,
        passwordError: emptyCheck(password, 'Password').message
      });
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
  let onFocusEmail = () => {
    setValidators({ ...validators, emailError: '' });
  }
  let onFocusPassword = () => {
    setValidators({ ...validators, passwordError: '' });
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: `https://thumbs.dreamstime.com/b/mobile-phone-store-logo-you-can-use-many-purpose-such-new-project-presentation-document-website-etc-smartphone-shop-template-148053914.jpg` }} style={styles.logo} resizeMode="stretch" />
        <Text style={styles.title}>Welcome to PhoneShop</Text>
      </View>
      <View style={styles.footer}>
        <View style={{ width: '90%' }}>
          <TextInput
            onFocus={onFocusEmail}
            onBlur={onBlurEmail}
            mode="outlined"
            color='#2f95dc'
            label="Email"
            value={email}
            onChangeText={email => setUserInfo({ ...userInfo, email })}>
          </TextInput>
          <Text style={{ color: 'red', paddingVertical: 3 }}>{validators.emailError}</Text>
          <TextInput
            onFocus={onFocusPassword}
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
            style={{ marginTop: 10, borderRadius: 50, borderWidth: 2 }}
            mode="outlined"
            color='#2f95dc'
            onPress={() => { props.navigation.navigate('SignUp') }}>Đăng ký</Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f95dc'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 150
  },
  title: {
    fontSize: 18,
    paddingTop: 10,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default SignIn;