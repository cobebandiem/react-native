import React from 'react';
import {
    View,
    Text
} from 'react-native';
function Phone(props) {
    const {name,price}=props.route.params;
    return (
        <View>
            <Text>{name}</Text>
            <Text>{price}</Text>
        </View>
    );
}

export default Phone;