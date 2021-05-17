import React from 'react';
import { View, FlatList, StyleSheet, Image, Text } from 'react-native';
import { IconButton, Colors, Checkbox } from 'react-native-paper';

function SoldItem(props) {
  const { name, images, price, sale, quantityOrder } = props.sold;
  const image = images ? images[0] : '';
  return (
    <View style={{ backgroundColor: '#fff', width: '95%', height: 100, flexDirection: 'row', alignItems: 'center', borderRadius: 10, overflow: 'hidden', marginBottom: 5 }}>
      <Image style={styles.img} source={{ uri: `https://hoanghamobile.com/i/preview/Uploads/${image}` }} />
      <View style={[{ flex: 6, height: '100%', marginHorizontal: 10, justifyContent: 'space-around', paddingVertical: 8 }]}>
        <Text>{name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.priceOnSale}>{props.formatNumber(price)}</Text>
          <Text>-{sale}%</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>{`Số lượng:  ${quantityOrder}`}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    height: 96,
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
export default SoldItem;