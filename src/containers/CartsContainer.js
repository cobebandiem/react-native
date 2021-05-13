import React, { useEffect, useContext } from 'react';
import { View } from 'react-native';
import CartList from './../components/CartList';
import CartItem from './../components/CartItem';
import { AppContext } from '../contexts/AppContext';

function CartsContainer(props) {
    const { fetchCarts, carts } = useContext(AppContext);
    console.log('dsadsa',carts);
    useEffect(() => {
        fetchCarts();
    }, []);
    // useEffect(()=>{

    // },[carts]);
    return (
        <CartList>
            {
                carts.map((cart)=>{
                    console.log(cart)
                    if(cart.quantityOrder>0){
                        return (<CartItem key={cart.id} cart={cart}/>);
                    }
                })
            }
            {/* <CartItem />
            <View style={{
                width: '100%',
                height: 4,
                backgroundColor: '#f1f1f1'
            }}></View>
            <CartItem />
            <View style={{
                width: '100%',
                height: 4,
                backgroundColor: '#f1f1f1'
            }}></View>
            <CartItem /> */}
        </CartList>
    );
}

export default CartsContainer;