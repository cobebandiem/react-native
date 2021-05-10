import React,{useState} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    FlatList
  } from 'react-native';
import CategoryListItem from './../components/CategoryListItem';
const Phones =({navigation})=> {
    const [phones,setPhones]=useState([
      {id:1,name:'Iphone 6',price:600},
      {id:2,name:'Iphone 7',price:700},
      {id:3,name:'Iphone 8',price:800},
      {id:5,name:'Iphone 6',price:600},
      {id:6,name:'Iphone 7',price:700},
      {id:7,name:'Iphone 8',price:800}
    ]);
    // let showPhones=(phones)=>{
    //   let rs=null;
    //   if(phones.length>0){
    //     rs=phones.map((phone,index)=>{
    //       return <CategoryListItem key={phone.id} phone={phone}/>
    //     })
    //   }
    //   return rs;
    // }
    return (
      // <View>
      //   <ScrollView style={styles.container}>
      //     {showPhones(phones)}
      //   </ScrollView>
      // </View>
      <FlatList
        data={phones}
        renderItem={({item})=><CategoryListItem navigation={navigation} phone={item}/>}
        keyExtractor={item=>`${item.id}`}/>
    );
  };

export default Phones;