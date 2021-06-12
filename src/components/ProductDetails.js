import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { formatNumber } from '../utils/formatPrice';
import { Button } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import ChartProduct from './ChartProduct';

function ProductDetails(props) {
  const { t, i18n } = useTranslation();
  const { addCarts } = props;
  const [active, setActive] = useState(0);
  let change = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide !== active) {
        setActive(slide)
      }
    }
  }
  let { images, name, price, sale, quantity, details, description } = props.route.params.product;
  let onAddCart = () => {
    addCarts(props.route.params.product, 1, true);
  }
  let onBuyNow = () => {
    addCarts(props.route.params.product, 1);
    props.navigation.navigate('Cart');
  }
  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({ nativeEvent }) => change(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled
            style={styles.wrap}>
            {
              images.map((item, index) => {
                if (item) {
                  return (<Image
                    key={index}
                    resizeMode="contain"
                    style={styles.wrap}
                    source={{ uri: `https://hoanghamobile.com/i/preview/Uploads/${item}` }} />)
                }
              })
            }
          </ScrollView>
          <View style={styles.wrapDot}>
            {
              images.map((item, index) => {
                if (item) {
                  return (<Text
                    key={index}
                    style={active === index ? styles.dotActive : styles.dot}>●</Text>)
                }
              })
            }
          </View>
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.priceOnSale, { paddingHorizontal: 10 }]}>{formatNumber(price - (price * sale / 100))}</Text>
            <Text style={styles.price}>{formatNumber(price)}</Text>
            <Text style={styles.sale}>-{sale}%</Text>
          </View>
        </Text>
        <Text style={styles.quantity}>{quantity} sản phẩm có sẵn</Text>
        <View>
          <Text style={styles.title}>Chi tiết sản phẩm:</Text>
          {
            details.map((item, index) => {
              let arrays = item.split(":");
              return (<View key={index} style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <Text style={{ flex: 3 }}>{arrays[0]}:</Text>
                <Text style={{ flex: 5 }}>{arrays[1]}</Text>
              </View>);
            })
          }
        </View>
        {/* <ChartProduct/> */}
        <View style={styles.line}></View>
        <View style={{ paddingTop: 20 }}>
          {
            description.map((item, index) => {
              if (item.toLowerCase().indexOf('.png') !== -1 || item.toLowerCase().indexOf('.jpg') !== -1 || item.toLowerCase().indexOf('.jpeg') !== -1) {
                return (<Image
                  key={index}
                  resizeMode="contain"
                  style={{ width: '100%', height: 200 }}
                  source={{ uri: `${item}` }} />)
              }
              return (<Text key={index} style={{ paddingHorizontal: 10, lineHeight: 24 }}>{item}</Text>);
            })
          }
        </View>
        
      </ScrollView>
      <View style={{ width: '100%', height: 100, flexDirection: 'row', backgroundColor: '#fff' }}>
        <Button
          style={{ flex: 1, marginHorizontal: 2, height: 38 }}
          mode="outlined"
          color='#2f95dc'
          disabled={quantity > 0 ? false : true}
          onPress={onAddCart}>
          {t('AddProduct')}
                </Button>
        <Button
          color='#2f95dc'
          style={{ flex: 1, marginHorizontal: 2, height: 38 }}
          mode="contained"
          disabled={quantity > 0 ? false : true}
          onPress={onBuyNow}>
          {t('BuyNow')}
                </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '92.5%',
    backgroundColor: '#fff'
  },
  wrap: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.5, // 25% window
    backgroundColor: '#f5f5f5'
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dot: {
    margin: 3,
    color: '#888'
  },
  dotActive: {
    margin: 3,
    color: 'black'
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
    padding: 10
  },
  price: {
    fontSize: 14,
    fontWeight: '100',
    textDecorationLine: 'line-through',
    opacity: 0.5
  },
  priceOnSale: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  sale: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: '300',
  },
  quantity: {
    fontSize: 15,
    fontWeight: '600',
    padding: 10
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    padding: 10
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#f1f1f1'
  }
})

export default ProductDetails;