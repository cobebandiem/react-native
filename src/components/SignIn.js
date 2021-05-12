import React, {useState, useContext, useEffect} from 'react';
import { View, Text, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { AppContext } from '../contexts/AppContext';

function SingIn(props) {
    const {navigation} = props;
    const {login, userInfo, id} = useContext(AppContext);
    const [user,setUser]=useState({
        email:'',
        password:''
    });
    const {email, password}=user;
    let onSubmit=()=>{
        login(email, password);
    
        if(id!==0){
            props.navigation.replace('HomeScreen');
        }else{
            Alert.alert('Đăng nhập thất bại!!', 'Vui lòng kiểm tra lại email or password!');
        }
    }
    // useEffect(()=>{
    //     if(id!==0){
    //         props.navigation.replace('HomeScreen');
    //     }
    // },[id])

    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'flex-start', marginTop:35}}>
            <View style={{width:'90%'}}>
                <TextInput
                    mode="outlined"
                    label="Email"
                    value={email}
                    onChangeText={email => setUser({...user, email})}>
                </TextInput>
                <TextInput
                    mode="outlined"
                    label="Password"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={password => setUser({...user, password})}>
                </TextInput>
                <Button 
                    style={{marginTop:25, borderRadius:50}} 
                    mode="contained"
                    onPress={onSubmit}>Đăng nhập</Button>
                <Button 
                    style={{marginTop:10, borderRadius:50}} 
                    mode="outlined"
                    onPress={()=>{props.navigation.navigate('SignUp')}}>Đăng ký</Button>
                <Button 
                    style={{marginTop:10, borderRadius:50}} 
                    mode="outlined"
                    onPress={()=>{props.navigation.replace('HomeScreen')}}>Go home</Button>
            </View>
        </View>
    );
}

export default SingIn;