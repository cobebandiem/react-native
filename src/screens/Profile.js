import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppContext } from '../contexts/AppContext';

const LeftContentUser = props => <Icon name="user-circle" size={40} color="#2f95dc" />
const LeftContent = props => <Icon name="list-alt" size={40} color="#2f95dc" />
const RightContent = props => <Icon name="angle-right" style={{ marginRight: 20 }} size={40} color="#2f95dc" />


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
      {/* <TouchableOpacity onPress={() => { props.navigation.navigate('EditProfile') }}>
        <Card>
          <Card.Title style={{ height: 70, backgroundColor: '#fff' }} subtitle='User Profile' left={LeftContentUser} right={RightContent} />
        </Card>
      </TouchableOpacity>
      <View style={{
        width: '100%',
        height: 2,
        backgroundColor: '#f1f1f1'
      }}></View>
      <Card onPress={() => { props.navigation.navigate('Sold') }}>
        <Card.Title style={{ height: 70, backgroundColor: '#fff' }} subtitle="Quản lý đơn hàng" left={LeftContent} right={RightContent} />
      </Card>
      <Button
        color='#2f95dc'
        style={{ marginTop: 50, borderRadius: 50 }}
        mode="contained"
        onPress={logoutUser}>Đăng xuất</Button> */}
    </View>
  );
}

export default Profile;