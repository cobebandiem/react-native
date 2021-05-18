import React from 'react';
import { View } from 'react-native';

function SoldList(props) {
  return (
    <View style={{ alignItems: 'center', marginTop: 8 }}>
      {props.children}
    </View>
  );
}

export default SoldList;