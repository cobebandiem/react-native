import React, { useEffect, useRef, useState,useContext } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { AppContext } from '../contexts/AppContext';

function Otp(props) {
  const { updateSold } = useContext(AppContext);
  const [pin, setPin] = useState({
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
  });
  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();
  const code=props.route.params.code;
  let onVerify = () => {
    let codeTempt = '';
    for (item in pin) {
      codeTempt += pin[item];
    }
    if (code == codeTempt) {
      updateSold();
      props.navigation.navigate('Cart');
    } else {
      Alert.alert('Mã xác nhận sai!');
    }
  };
  useEffect(() => {
    input1Ref.current.focus();
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'column', paddingTop: '35%', alignItems: 'center' }}>
        <Text style={{ color: '#2f95dc', fontSize: 25, fontWeight: 'bold' }}>Verification</Text>
        <Text style={{ color: '#2f95dc', fontSize: 15, fontWeight: '400' }}>Please type the validation code sent</Text>
        <Text style={{ color: '#2f95dc', fontSize: 15, fontWeight: '400' }}>to vandung130299@gmail.com</Text>
      </View>
      <View style={{ paddingTop: '2%', justifyContent: "center", flexDirection: "row" }}>
        <TextInput
          ref={input1Ref}
          name="pin1Ref"
          maxLength={1}
          value={pin.pin1}
          onChangeText={(value) => {
            setPin({ ...pin, pin1: value });
            input2Ref.current.focus();
          }}
          style={{ color: '#2f95dc', backgroundColor: "#fff", fontWeight: '600', alignSelf: 'center', padding: 10, margin: 15, fontSize: 20, height: 50, width: '10%', borderRadius: 10, borderWidth: 0.5, borderColor: '#2f95dc', justifyContent: "center", alignItems: "center", alignContent: "center", textAlign: "center" }} />
        <TextInput
          ref={input2Ref}
          value={pin.pin2}
          onChangeText={(value) => {
            setPin({ ...pin, pin2: value });
            input3Ref.current.focus();
          }}
          maxLength={1}
          style={{ color: '#2f95dc', backgroundColor: "#fff", fontWeight: '600', alignSelf: 'center', padding: 10, margin: 15, fontSize: 20, height: 50, width: '10%', borderRadius: 10, borderWidth: 0.5, borderColor: '#2f95dc', justifyContent: "center", alignItems: "center", alignContent: "center", textAlign: "center" }} />
        <TextInput
          ref={input3Ref}
          value={pin.pin3}
          onChangeText={(value) => {
            setPin({ ...pin, pin3: value });
            input4Ref.current.focus();
          }}
          maxLength={1}
          style={{ color: '#2f95dc', backgroundColor: "#fff", fontWeight: '600', alignSelf: 'center', padding: 10, margin: 15, fontSize: 20, height: 50, width: '10%', borderRadius: 10, borderWidth: 0.5, borderColor: '#2f95dc', justifyContent: "center", alignItems: "center", alignContent: "center", textAlign: "center" }} />
        <TextInput
          ref={input4Ref}
          value={pin.pin4}
          onChangeText={(value) => {
            setPin({ ...pin, pin4: value });
          }}
          maxLength={1}
          style={{ color: '#2f95dc', backgroundColor: "#fff", fontWeight: '600', alignSelf: 'center', padding: 10, margin: 15, fontSize: 20, height: 50, width: '10%', borderRadius: 10, borderWidth: 0.5, borderColor: '#2f95dc', justifyContent: "center", alignItems: "center", alignContent: "center", textAlign: "center" }} />
      </View>
      <View style={{ flexDirection: 'column', paddingTop: '4%', alignItems: 'center',width:'100%',height:56 }}>
        <Button
          style={{ flex: 1, height: 50,width:'50%' }}
          mode="contained"
          color='#2f95dc'
          onPress={onVerify}>
          Verify
        </Button>
      </View>
    </View>
  );
}

export default Otp;