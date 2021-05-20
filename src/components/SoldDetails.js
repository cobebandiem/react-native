import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { formatNumber } from './../utils/formatPrice';
import { useTranslation } from 'react-i18next';

function SoldDetails(props) {
  const { t, i18n } = useTranslation();
  const { name, images, price, sale, quantityOrder } = props.route.params.sold;
  const { address } = props.route.params.user;
  const image = images ? images[0] : '';
  return (
    <View style={{ alignItems: 'center', marginTop: 8 }}>
      <View style={{ backgroundColor: '#2f95dc', width: '100%', height: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', overflow: 'hidden', marginBottom: 5, paddingHorizontal: 20 }}>
        <View>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>{t('OrderCompleted')}</Text>
          <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500' }}>{t('ThanksForYou')}</Text>
        </View>
        <Icon name="mobile-phone" style={{ paddingRight: 20 }} size={80} color="#fff" />
      </View>
      <View style={{ backgroundColor: '#fff', width: '100%', height: 100, flexDirection: 'row', alignItems: 'center', overflow: 'hidden', marginBottom: 5 }}>
        <Image style={styles.img} source={{ uri: `https://hoanghamobile.com/i/preview/Uploads/${image}` }} />
        <View style={[{ flex: 6, height: '100%', marginHorizontal: 10, justifyContent: 'space-around', paddingVertical: 8 }]}>
          <Text>{name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.priceOnSale}>{formatNumber(price - (price * sale / 100))}</Text>
            <Text>-{sale}%</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text>{`${t('Quantity')}  ${quantityOrder}`}</Text>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: '#fff', width: '100%', paddingHorizontal: 20, height: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', overflow: 'hidden', marginBottom: 5 }}>
        <Icon name="credit-card" style={{ paddingRight: 20 }} size={30} color="#696969" />
        <Text style={{ fontSize: 18, color: '#000' }}>{t('Total')} </Text><Text style={{ fontSize: 18, color: 'red' }}> {formatNumber((price - (price * sale / 100)) * quantityOrder)}</Text>
      </View>
      <View style={{ backgroundColor: '#fff', width: '100%', paddingHorizontal: 20, height: 100, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-around', overflow: 'hidden', marginBottom: 5 }}>
        <Text><Icon name="send" style={{ paddingRight: 20 }} size={25} color="#696969" />{t('ShippingInformation')}</Text>
        <Text style={{ color: '#2f95dc' }}><Icon name="circle" style={{ paddingRight: 20 }} size={10} color="#2f95dc" /> [Tòa nhà TMA, Công viên phần mềm Quang Trung, P. Tân Chánh Hiệp, Quận 12, TP.Hồ Chí Minh]</Text>
      </View>
      <View style={{ backgroundColor: '#fff', width: '100%', paddingHorizontal: 20, height: 100, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-around', overflow: 'hidden', marginBottom: 5 }}>
        <Text><Icon name="neuter" style={{ paddingRight: 20 }} size={25} color="#696969" />{t('AddressReceived')}</Text>
        <Text style={{ color: '#2f95dc' }}><Icon name="circle" style={{ paddingRight: 20 }} size={10} color="#2f95dc" /> [{address}]</Text>
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
export default SoldDetails;