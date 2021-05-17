import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { AppContext } from '../contexts/AppContext';
function Loading(props) {
    const { isLoading } = useContext(AppContext);
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