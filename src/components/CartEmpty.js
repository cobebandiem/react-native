import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
function CartEmpty(props) {
  return (
    <View style={{ width: '60%', justifyContent: 'center', alignItems: 'center', paddingTop: '35%' }}>
      <Icon name='shopping-cart' size={75} color='#2f95dc' />
      <Text style={{ fontSize: 16, fontWeight: 'bold', paddingBottom: 5, paddingTop: 15 }}>"Hông" có gì trong giỏ hết</Text>
      <Text>Lướt Shop lựa hàng ngay đi!</Text>
      <Button
        style={{ marginTop: 10, backgroundColor: '#fff' }}
        mode="outlined"
        color='#2f95dc'
        onPress={() => props.navigation.navigate('Products')}
      >Mua săm ngay!</Button>
    </View>
  );
}

export default CartEmpty;