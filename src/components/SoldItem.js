import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function SoldItem(props) {
  const { sold, user } = props;
  const { name, images, price, sale, quantityOrder } = props.sold;
  const image = images ? images[0] : '';
  return (
    <TouchableOpacity onPress={() => { props.navigation.navigate('SoldDetails', { sold, user }) }}>
      <View style={{ backgroundColor: '#fff', width: '95%', height: 100, flexDirection: 'row', alignItems: 'center', borderRadius: 10, overflow: 'hidden', marginBottom: 5 }}>
        <Image style={styles.img} source={{ uri: `https://hoanghamobile.com/i/preview/Uploads/${image}` }} />
        <View style={[{ flex: 6, height: '100%', marginHorizontal: 10, justifyContent: 'space-around', paddingVertical: 8 }]}>
          <Text>{name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.priceOnSale}>{props.formatNumber(price - (price * sale / 100))}</Text>
            <Text>-{sale}%</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>{`Số lượng:  ${quantityOrder}`}</Text>
          </View>
        </View>
        <Icon name="angle-right" style={{ marginRight: 12 }} size={30} color="#2f95dc" />
      </View>
    </TouchableOpacity>
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