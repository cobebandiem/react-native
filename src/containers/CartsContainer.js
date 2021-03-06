import React, { useEffect, useContext, useState } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import CartList from './../components/CartList';
import CartItem from './../components/CartItem';
import { AppContext } from '../contexts/AppContext';
import { Button } from 'react-native-paper';
import { formatNumber } from './../utils/formatPrice';
import CartEmpty from './../components/CartEmpty';
import { useTranslation } from 'react-i18next';

function CartsContainer(props) {
  const { t, i18n } = useTranslation();
  const { fetchCarts, carts, updateSold, user, isLoading, getCode } = useContext(AppContext);
  const [cartsList, setCartsList] = useState([]);
  useEffect(() => {
    fetchCarts();
    setCartsList(carts)
  }, []);
  useEffect(() => {
    setCartsList(carts)
  }, [carts]);
  useEffect(() => {
    if (isLoading === true) {
      props.navigation.navigate('Loading');
    }
  }, [isLoading])
  let amountMoneyPayed = 0;
  cartsList.map((cart) => {
    if (cart.checked) {
      amountMoneyPayed += (cart.price - (cart.price * cart.sale / 100)) * cart.quantityOrder;
    }
  });
  let onOrder = () => {
    Alert.alert(
      `Chúng tôi sẽ gửi mã xác nhận cho bạn thông qua Email vui lòng xác nhân?`,
      '',
      [
        {
          text: 'Cancel',
          style: "cancel"
        },
        {
          text: 'OK',
          onPress: () => {
            getCode(props.navigation);
          }
        }
      ]
    )
  }
  let showListCart = () => {
    console.log(cartsList)
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
          <Text style={{ fontSize: 15 }}>{t('Total')}</Text>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#2f95dc' }}>{formatNumber(amountMoneyPayed)}</Text>
            <Text>{t('VAT')}</Text>
          </View>
        </View>
        <Button
          color='#2f95dc'
          style={{ marginHorizontal: 15 }}
          mode="contained"
          disabled={amountMoneyPayed === 0 ? true : false}
          onPress={onOrder}>{t('OrderNow')}</Button>
      </View>
    </View>
  );
}

export default CartsContainer;