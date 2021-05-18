import React, { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

function Loading(props) {
  const { isLoading } = props;
  useEffect(() => {
    if (isLoading === false) {
      props.navigation.goBack();
    }
  }, [isLoading])
  return (
    <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={50} color="#2f95dc" />
      <Text>Loading...</Text>
    </View>
  );
}

export default Loading;