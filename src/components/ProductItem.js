import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { formatNumber } from '../utils/formatPrice';
import { AppContext } from '../contexts/AppContext';
import { useTranslation } from 'react-i18next';
function ProductItem(props) {
  const { t, i18n } = useTranslation();
  const { addCarts } = useContext(AppContext);
  const { product } = props;
  const { id, name, price, sale, quantity } = product;
  let onAddCarts = () => {
    addCarts(product, 1);
    props.navigation.navigate('Cart');
  }
  return (
    <TouchableOpacity style={{ flex: 1 }} key={id} onPress={() => { props.navigation.navigate('Details', { product }) }}>
      <View style={styles.shadow}>
        <View style={styles.container}>
          <Image style={styles.img} source={{ uri: `https://hoanghamobile.com/i/preview/Uploads/${product.images[0]}` }} />
          <View style={styles.info}>
            <Text numberOfLines={2} style={styles.name}>{name}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>{formatNumber(price - (price * sale / 100))}</Text>
              <TouchableOpacity disabled={quantity > 0 ? false : true} onPress={() => onAddCarts()}>
                <Text style={styles.cartText}>{t('Buy')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  shadow: {
    borderRadius: 4,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 8,
    margin: 8,
  },
  container: {
    marginBottom: 20,
    borderRadius: 4,
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  img: {
    height: 150,
    resizeMode: "contain",
    borderRadius: 4,
    padding: 5
  },
  info: {
    padding: 8
  },
  name: {
    fontSize: 16,
    marginBottom: 8
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  price: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600'
  },
  cartText: {
    textTransform: 'uppercase',
    fontSize: 17,
    color: '#2f95dc'
  },
})
export default ProductItem;