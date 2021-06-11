import React, { useContext, useEffect, useState } from 'react';
import SoldItem from '../components/SoldItem';
import SoldList from './../components/SoldList';
import CartEmpty from './../components/CartEmpty';
import { AppContext } from '../contexts/AppContext';
import { formatNumber } from './../utils/formatPrice';
import { View, ScrollView } from 'react-native';

function SoldContainer(props) {
  const { fetchGetSold, getSold, user } = useContext(AppContext);
  const [soldShow, setSoldShow] = useState([]);
  useEffect(() => {
    fetchGetSold();
    setSoldShow(getSold);
  }, []);
  useEffect(() => {
    setSoldShow(getSold);
  }, [getSold]);
  let showListSold = () => {
    let showResult = null;
    if (soldShow.length > 0) {
      showResult = soldShow.map((soldItem) => {
        if (soldItem.quantityOrder > 0) {
          return (<SoldItem key={`${soldItem.id}`} user={user} sold={soldItem} title="Đơn hàng đang được đi lấy." formatNumber={formatNumber} navigation={props.navigation} />);
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