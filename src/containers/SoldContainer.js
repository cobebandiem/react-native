import React, { useContext, useEffect } from 'react';
import SoldItem from '../components/SoldItem';
import SoldList from './../components/SoldList';
import { AppContext } from '../contexts/AppContext';
import { formatNumber } from './../utils/formatPrice';
import { View, ScrollView } from 'react-native';

function SoldContainer(props) {
    const { fetchSold, sold, updateSold } = useContext(AppContext);
    useEffect(() => {
        fetchSold();
    }, []);
    return (
        <View>
            <ScrollView style={{ width: '100%', height: '85%' }}>
                <SoldList>
                    {sold.map((item) => {
                        return (<SoldItem key={`${item.id}`} sold={item} formatNumber={formatNumber} />);
                    })}
                </SoldList>
            </ScrollView>
        </View>
    );
}

export default SoldContainer;