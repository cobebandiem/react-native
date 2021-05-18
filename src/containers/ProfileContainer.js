import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppContext } from './../contexts/AppContext';

function Profile(props) {
  const { logout, user } = useContext(AppContext);
  let logoutUser = () => {
    logout();
    props.navigation.replace('SignIn');
  }
  return (
    <View style={{ height: '100%', backgroundColor: '#fff' }}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 20, paddingBottom: 30, paddingLeft: 20 }}>Shop's</Text>
      </View>
      <View style={{}}>
        <TouchableOpacity onPress={() => { props.navigation.navigate('EditProfile') }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50, borderColor: '#f1f1f1', borderTopWidth: 2, paddingLeft: 20 }}>
            <Icon name="user-circle" size={30} color="#2f95dc" />
            <Text style={{ flex: 1, paddingLeft: 20, fontSize: 16, fontWeight: '500' }}>User Profile</Text>
            <Icon name="angle-right" style={{ marginRight: 20 }} size={30} color="#696969" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { props.navigation.navigate('Sold') }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50, borderColor: '#f1f1f1', borderTopWidth: 2, paddingLeft: 20 }}>
            <Icon name="list-alt" size={30} color="#2f95dc" />
            <Text style={{ flex: 1, paddingLeft: 20, fontSize: 16, fontWeight: '500' }}>Đơn mua</Text>
            <Icon name="angle-right" style={{ marginRight: 20 }} size={30} color="#696969" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { props.navigation.navigate('ChangePassword') }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50, borderColor: '#f1f1f1', borderTopWidth: 2, paddingLeft: 20 }}>
            <Icon name="lock" size={30} color="#2f95dc" />
            <Text style={{ flex: 1, paddingLeft: 20, fontSize: 16, fontWeight: '500' }}>Đổi mật khẩu</Text>
            <Icon name="angle-right" style={{ marginRight: 20 }} size={30} color="#696969" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={logoutUser}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50, borderColor: '#f1f1f1', borderTopWidth: 2, paddingLeft: 20 }}>
            <Icon name="sign-out" size={30} color="#2f95dc" />
            <Text style={{ flex: 1, paddingLeft: 20, fontSize: 16, fontWeight: '500' }}>Đăng xuất</Text>
            <Icon name="angle-right" style={{ marginRight: 20 }} size={30} color="#696969" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Profile;