import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { IconButton, Colors, Checkbox } from 'react-native-paper';
import { formatNumber } from './../utils/formatPrice';
import { AppContext } from '../contexts/AppContext';

function CartItem(props) {
  const { deleteCarts, editCarts, changeCheckCart } = useContext(AppContext);
  const { id, name, images, price, sale, quantityOrder, quantity, checked } = props.cart;
  let image = images ? images[0] : '';
  let onIncreaseCart = (quantityAddCart) => {
    if (quantityOrder < quantity) {
      editCarts(id, quantityOrder + quantityAddCart);
    }
  }
  let onReduceCart = (quantityAddCart) => {
    editCarts(id, quantityOrder + quantityAddCart);
  }
  return (
    <View style={{ backgroundColor: '#fff', width: '95%', height: 120, flexDirection: 'row', alignItems: 'center', borderRadius: 10, overflow: 'hidden', marginBottom: 5 }}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          changeCheckCart(props.cart);
        }}
      />
      <Image style={styles.img} source={{ uri: `https://hoanghamobile.com/i/preview/Uploads/${image}` }} />
      <View style={[{ flex: 6, height: '100%', marginHorizontal: 10, justifyContent: 'space-around', paddingVertical: 8 }]}>
        <Text>{name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.priceOnSale}>{formatNumber(price - (price * sale / 100))}</Text>
          <Text>-{sale}%</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <IconButton
            style={{ backgroundColor: '#f1f1f1' }}
            icon="minus"
            color={Colors.blue300}
            size={20}
            onPress={() => onReduceCart(-1)} />
          <Text>{quantityOrder}</Text>
          <IconButton
            style={{ backgroundColor: '#f1f1f1' }}
            icon="plus"
            color={Colors.blue300}
            disabled={quantityOrder < quantity ? false : true}
            size={20}
            onPress={() => onIncreaseCart(1)} />
        </View>
      </View>
      <IconButton
        style={{ flex: 1, backgroundColor: '#f1f1f1' }}
        icon="close"
        color={Colors.black}
        size={20}
        onPress={() => deleteCarts(id)} />
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    height: 120,
    flex: 2,
    resizeMode: "contain",
    borderRadius: 4,
    padding: 5,
    backgroundColor: '#fff'
  },
  priceOnSale: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    paddingRight: 10
  }
})
export default CartItem;