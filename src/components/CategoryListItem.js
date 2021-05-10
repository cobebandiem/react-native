import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import LoveImage from './../../assets/like.png';
function CategoryListItem(props) {
    const {name,price}=props.phone;
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{props.navigation.navigate('Phone',{
            name,
            price
        })}}>
            <View style={styles.container}>
                <Text style={styles.title}>{props.phone.name}</Text>
                <Image style={styles.categoryImage} source={LoveImage}/>
                <Text>$<Text style={styles.price}>{props.phone.price}</Text></Text>
            </View>
        </TouchableOpacity>
    );
}
const styles=StyleSheet.create({
    categoryImage:{
        width:64,
        height:64
    },
    title:{
        textTransform:'uppercase',
        marginBottom:8,
        fontWeight:'700'
    },
    price:{
        color:'red'
    },
    container:{
        alignItems:'center',
        padding:16,
        borderRadius:4,
        backgroundColor:'#fff',
        shadowColor:'#000',
        elevation:5,
        margin:16
    }
});

export default CategoryListItem;