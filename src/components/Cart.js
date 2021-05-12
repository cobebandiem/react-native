import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
function Cart(props) {
    return (
        <View style={{backgroundColor:'#fff', width:'90%', height:120, flexDirection:'row', alignItems:'center', borderRadius:10, overflow:'hidden'}}>            
            <Image style={styles.img} source={{uri: 'https://hoanghamobile.com/i/preview/Uploads/2021/03/11/image-removebg-preview.png'}}/>
            <View style={[{flex:6, height:'100%', marginHorizontal:10, justifyContent:'space-around', paddingVertical:8}]}>
                <Text>Điện thoại di động Samsung Galaxy A32 - Chính hãng</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={styles.priceOnSale}>đ20.000.000</Text>
                    <Text>-15%</Text>
                </View>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                    <IconButton
                        style={{backgroundColor:'#f1f1f1'}}
                        icon="minus"
                        color={Colors.blue300}
                        size={20}
                        onPress={() => console.log('Pressed')}/>
                    <Text>12</Text>
                    <IconButton
                        style={{backgroundColor:'#f1f1f1'}}
                        icon="plus"
                        color={Colors.blue300}
                        size={20}
                        onPress={() => console.log('Pressed')}/>
                </View>
            </View>
            <IconButton
                style={{flex:1, backgroundColor:'#f1f1f1'}}
                icon="close"
                color={Colors.black}
                size={20}
                onPress={() => console.log('Pressed')}/>
        </View>
    );
}
const styles=StyleSheet.create({
    img:{
        height:120,
        flex:2,
        resizeMode : "contain",
        borderRadius:4,
        padding:5,
        backgroundColor:'#fff'
    },
    priceOnSale:{
        fontSize:18,
        fontWeight:'600',
        color:'#000',
        paddingRight:10
    }
})
export default Cart;