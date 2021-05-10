
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';

function Home(props) {
    const products=[
        {
            id:1,
            images:['https://hoanghamobile.com/i/preview/Uploads/2020/11/06/iphone-12-pro-max-4.png'],
            name:'iphone 12 pro max',
            price:120000
        },
        {
            id:2,
            images:['https://hoanghamobile.com/i/preview/Uploads/2020/11/06/iphone-12-pro-max-4.png'],
            name:'iphone 12 pro max',
            price:120000
        },
        {
            id:3,
            images:['https://hoanghamobile.com/i/preview/Uploads/2020/11/06/iphone-12-pro-max-4.png'],
            name:'iphone 12 pro max',
            price:120000
        },
        {
            id:4,
            images:['https://hoanghamobile.com/i/preview/Uploads/2020/11/06/iphone-12-pro-max-4.png'],
            name:'iphone 12 pro max',
            price:120000
        },
        {
            id:5,
            images:['https://hoanghamobile.com/i/preview/Uploads/2020/11/06/iphone-12-pro-max-4.png'],
            name:'iphone 12 pro max',
            price:120000
        },
        {
            id:6,
            images:['https://hoanghamobile.com/i/preview/Uploads/2020/11/06/iphone-12-pro-max-4.png'],
            name:'iphone 12 pro max',
            price:120000
        },
        {
            id:7,
            images:['https://hoanghamobile.com/i/preview/Uploads/2020/11/06/iphone-12-pro-max-4.png'],
            name:'iphone 12 pro max',
            price:120000
        }
    ];
    let product=(product)=>{
        return (<View style={{flex:1}} key={product.id}>
                    <View style={styles.shadow}>
                        <View style={styles.container}>
                            <Image style={styles.img} source={{uri: product.images[0]}}/>
                            <View style={styles.info}>
                                <Text style={styles.name}>{product.name}</Text>
                                <View style={styles.priceRow}>
                                    <Text style={styles.price}>{product.price}</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.cartText}>MUA +</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>);
    }
    return (
        <FlatList
            data={products}
            numColumns={2}
            renderItem={({item})=>product(item)}
            keyExtractor={(item)=>item.id}/>
    );
}
const styles=StyleSheet.create({
    shadow:{
        borderRadius:4,
        backgroundColor:'#fff',
        shadowColor:'#000',
        elevation:8,
        margin:8,
    },
    container:{
        marginBottom:20,
        borderRadius:4,
        backgroundColor:'#fff',
        overflow:'hidden'
    },
    img:{
        height:150,
        resizeMode : "contain",
        borderRadius:4,
        padding:5
    },
    info:{
        padding:8
    },
    name:{
        fontSize:16,
        marginBottom:8
    },
    priceRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    price:{
        fontSize:16,
        color:'#888'
    },
    cartText:{
        textTransform:'uppercase',
        fontSize:16,
        color:'#2f95dc'
    },
})

export default Home;