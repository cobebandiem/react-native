import React, { useContext, useEffect, useState } from 'react';
import SoldItem from '../components/SoldItem';
import SoldList from './../components/SoldList';
import { AppContext } from '../contexts/AppContext';
import { formatNumber } from './../utils/formatPrice';
import { View, ScrollView } from 'react-native';

function SoldContainer(props) {
  const { fetchSold, sold, carts } = useContext(AppContext);
  const [soldShow, setSoldShow] = useState([]);
  useEffect(() => {
    fetchSold();
    setSoldShow(sold);
  }, []);
  useEffect(() => {
    setSoldShow(sold);
  }, [sold]);
  return (
    <View>
      <ScrollView style={{ width: '100%', height: '85%' }}>
        <SoldList>
          {soldShow.map((item) => {
            return (<SoldItem key={`${item.id}`} sold={item} formatNumber={formatNumber} />);
          })}
        </SoldList>
      </ScrollView>
    </View>
  );
}

export default SoldContainer;