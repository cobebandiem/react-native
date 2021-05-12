import React from 'react';
import {View} from 'react-native';
import Carts from './../components/Carts';
import Cart from './../components/Cart';

function CartsContainer(props) {
    return (
        <Carts>
            <Cart/>
            <View style={{
                width:'100%',
                height:4,
                backgroundColor:'#f1f1f1'
            }}></View>
            <Cart/>
            <View style={{
                width:'100%',
                height:4,
                backgroundColor:'#f1f1f1'
            }}></View>
            <Cart/>
        </Carts>
    );
}

export default CartsContainer;