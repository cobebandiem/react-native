import React, { useEffect, useContext, useState } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import CartList from './../components/CartList';
import CartItem from './../components/CartItem';
import { AppContext } from '../contexts/AppContext';
import { Button } from 'react-native-paper';
import { formatNumber } from './../utils/formatPrice';
import CartEmpty from './../components/CartEmpty';
function CartsContainer(props) {
  const { fetchCarts, carts, updateSold } = useContext(AppContext);
  const [cartsList, setCartsList] = useState([]);
  useEffect(() => {
    fetchCarts();
    setCartsList(carts)
  }, []);
  useEffect(() => {
    setCartsList(carts)
  }, [carts]);
  let amountMoneyPayed = 0;
  cartsList.map((cart) => {
    if (cart.checked) {
      amountMoneyPayed += (cart.price - (cart.price * cart.sale / 100)) * cart.quantityOrder;
    }
  });
  let onOrder = () => {
    Alert.alert(
      `Số tiền bạn phải trả là ${formatNumber(amountMoneyPayed)} bạn chắc chắn muốn đạt hàng?`,
      '',
      [
        {
          text:'Cancel',
          onPress:()=>{console.log('huy dat hang')},
          style:"cancel"
        },
        {
          text:'OK',
          onPress:()=>updateSold()
        }
      ]
    )
  }
  let showListCart = () => {
    let showResult = null;
    if (cartsList.length > 0) {
      showResult = cartsList.map((cart) => {
        if (cart.quantityOrder > 0) {
          return (<CartItem key={`${cart.id}`} cart={cart} />);
        }
      })
    } else {
      return <CartEmpty navigation={props.navigation} />
    }
    return showResult;
  }
  return (
    <View>
      <ScrollView style={{ width: '100%', height: '85%' }}>
        <CartList>
          {
            showListCart()
          }
        </CartList>
      </ScrollView>
      <View style={{ width: '100%', height: '28.5%', borderTopColor: '#202020', borderTopWidth: 2 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
          <Text style={{ fontSize: 15 }}>Tổng tiền:</Text>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#2f95dc' }}>{formatNumber(amountMoneyPayed)}</Text>
            <Text>Đã bao gồm thuế VAT</Text>
          </View>
        </View>
        <Button
          color='#2f95dc'
          style={{ marginHorizontal: 15 }}
          mode="contained"
          onPress={onOrder}>Tiến hành đặt hàng</Button>
      </View>
    </View>
  );
}

export default CartsContainer;