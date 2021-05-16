import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppContext } from '../contexts/AppContext';

const LeftContentUser = props => <Icon name="user-circle" size={40} color="#000" />
const LeftContent = props => <Icon name="list-alt" size={40} color="#000" />
const RightContentUser = props => <Icon name="angle-right" style={{ marginRight: 20 }} size={40} color="#000" />


function Profile(props) {
  const { logout, user } = useContext(AppContext);
  let logoutUser = () => {
    logout();
    props.navigation.replace('SignIn');
  }
  return (
    <View>
      <TouchableOpacity onPress={() => { props.navigation.navigate('EditProfile') }}>
        <Card>
          <Card.Title style={{ height: 100, backgroundColor: '#fff' }} title={user.name} subtitle={user.phone} left={LeftContentUser} right={RightContentUser} />
        </Card>
      </TouchableOpacity>
      <View style={{
        width: '100%',
        height: 2,
        backgroundColor: '#f1f1f1'
      }}></View>
      <Card>
        <Card.Title style={{ height: 60, backgroundColor: '#fff' }} title="Quản lý đơn hàng" left={LeftContent} />
      </Card>
      <Button
        color='#2f95dc'
        style={{ marginTop: 50, borderRadius: 50 }}
        mode="contained"
        onPress={logoutUser}>Đăng xuất</Button>
    </View>
  );
}

export default Profile;