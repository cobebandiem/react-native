import React, { useContext, useEffect, useState } from 'react';
import SoldItem from '../components/SoldItem';
import SoldList from './../components/SoldList';
import CartEmpty from './../components/CartEmpty';
import { AppContext } from '../contexts/AppContext';
import { formatNumber } from './../utils/formatPrice';
import { View, ScrollView } from 'react-native';

function SoldContainer(props) {
  const { fetchDelivering, delivering, user } = useContext(AppContext);
  const [soldShow, setSoldShow] = useState([]);
  useEffect(() => {
    fetchDelivering();
    setSoldShow(delivering);
  }, []);
  useEffect(() => {
    setSoldShow(delivering);
  }, [delivering]);
  let showListSold = () => {
    let showResult = null;
    if (soldShow.length > 0) {
      showResult = soldShow.map((soldItem) => {
        if (soldItem.quantityOrder > 0) {
          return (<SoldItem key={`${soldItem.id}`} user={user} sold={soldItem} title="Đơn hàng đang được giao." formatNumber={formatNumber} navigation={props.navigation} />);
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
        <SoldList>
          {showListSold()}
        </SoldList>
      </ScrollView>
    </View>
  );
}

export default SoldContainer;