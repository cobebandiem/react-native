import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
//import {formatVnd} from './../../utils/formatPrice';
function Details(props) {
    const [active, setActive]=useState(0);
    let change=(nativeEvent) => {
        if(nativeEvent) {
          const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
          if (slide !== active) {
            setActive(slide)
          }
        }
    }
    let {images, name, price}=props.route.params.product;
    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent })=>change(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    pagingEnabled 
                    style={styles.wrap}>
                    {
                        images.map((item,index)=>{
                            if(item){
                                return (<Image
                                    key={index}
                                    resizeMode="contain"
                                    style={styles.wrap}
                                    source={{uri: `https://hoanghamobile.com/i/preview/Uploads/${item}`}}/>)
                            }
                        }) 
                    }
                </ScrollView>
                <View style={styles.wrapDot}>
                    {
                        images.map((item,index)=>{
                            if(item){
                                return (<Text
                                    key={index}
                                    style={active === index ? styles.dotActive : styles.dot}>●</Text>)
                            }
                        }) 
                    }
                </View>
            </View>
            <Text style={styles.name}>{name}</Text>
            {/* <Text style={styles.price}>{formatVnd(price)}</Text> */}
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        backgroundColor:'#fff'
    },
    wrap: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.25, // 25% window
        backgroundColor:'#f5f5f5'
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
        dot: {
        margin: 3,
        color: '#888'
    },
    dotActive: {
        margin: 3,
        color: 'black'
    },
    name:{
        fontSize:16,
        fontWeight:'400',
        padding:10
    },
    price:{
        
    }
})

export default Details;