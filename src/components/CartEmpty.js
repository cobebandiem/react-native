import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

function CartEmpty(props) {
  const { t, i18n } = useTranslation();
  return (
    <View style={{ width: '60%', justifyContent: 'center', alignItems: 'center', paddingTop: '35%' }}>
      <Icon name='shopping-cart' size={75} color='#2f95dc' />
      <Text style={{ fontSize: 16, fontWeight: 'bold', paddingBottom: 5, paddingTop: 15 }}>{t('NothingInBasket')}</Text>
      <Text>{t('ShopNow')}</Text>
      <Button
        style={{ marginTop: 10, backgroundColor: '#fff' }}
        mode="outlined"
        color='#2f95dc'
        onPress={() => props.navigation.navigate('Products')}
      >{t('ShoppingNow')}</Button>
    </View>
  );
}

export default CartEmpty;