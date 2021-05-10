import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Phones from './src/screens/Phones';
import Phone from './src/screens/Phone';
import {} from 'react-navigation';

const AppNavigator = createStackNavigator({
    Phones:{
        screen: Phones
    },
    Phone:{
        screen: Phone
    }
});

// function AppNavigator(props) {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Home" component={HomeScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

export default AppNavigator;