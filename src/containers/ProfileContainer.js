import React, { useContext } from 'react';
import { AppContext } from './../contexts/AppContext';
import Profile from './../components/Profile';

function ProfileContainer(props) {
  const { logout } = useContext(AppContext);
  // let logoutUser = () => {
  //   logout();
  //   props.navigation.replace('SignIn');
  // }
  return (
    <Profile logout={logout} navigation={props.navigation}/>
    // <View style={{ height: '100%', backgroundColor: '#fff' }}>
    //   <View>
    //     <Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 20, paddingBottom: 30, paddingLeft: 20 }}>Shop's</Text>
    //   </View>
    //   <View style={{}}>
    //     <TouchableOpacity onPress={() => { props.navigation.navigate('EditProfile') }}>
    //       <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50, borderColor: '#f1f1f1', borderTopWidth: 2, paddingLeft: 20 }}>
    //         <Icon name="user-circle" size={30} color="#2f95dc" />
    //         <Text style={{ flex: 1, paddingLeft: 20, fontSize: 16, fontWeight: '500' }}>{t('UserProfile')}</Text>
    //         <Icon name="angle-right" style={{ marginRight: 20 }} size={30} color="#696969" />
    //       </View>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={() => { props.navigation.navigate('Sold') }}>
    //       <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50, borderColor: '#f1f1f1', borderTopWidth: 2, paddingLeft: 20 }}>
    //         <Icon name="list-alt" size={30} color="#2f95dc" />
    //         <Text style={{ flex: 1, paddingLeft: 20, fontSize: 16, fontWeight: '500' }}>{t('BoughtProduct')}</Text>
    //         <Icon name="angle-right" style={{ marginRight: 20 }} size={30} color="#696969" />
    //       </View>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={() => { props.navigation.navigate('ChangePassword') }}>
    //       <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50, borderColor: '#f1f1f1', borderTopWidth: 2, paddingLeft: 20 }}>
    //         <Icon name="lock" size={30} color="#2f95dc" />
    //         <Text style={{ flex: 1, paddingLeft: 20, fontSize: 16, fontWeight: '500' }}>{t('ChangePassword')}</Text>
    //         <Icon name="angle-right" style={{ marginRight: 20 }} size={30} color="#696969" />
    //       </View>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={() => { props.navigation.navigate('Setting') }}>
    //       <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50, borderColor: '#f1f1f1', borderTopWidth: 2, paddingLeft: 20 }}>
    //         <Icon name="align-center" size={30} color="#2f95dc" />
    //         <Text style={{ flex: 1, paddingLeft: 20, fontSize: 16, fontWeight: '500' }}>{t('Setting')}</Text>
    //         <Icon name="angle-right" style={{ marginRight: 20 }} size={30} color="#696969" />
    //       </View>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={logoutUser}>
    //       <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50, borderColor: '#f1f1f1', borderTopWidth: 2, paddingLeft: 20 }}>
    //         <Icon name="sign-out" size={30} color="#2f95dc" />
    //         <Text style={{ flex: 1, paddingLeft: 20, fontSize: 16, fontWeight: '500' }}>{t('Logout')}</Text>
    //         <Icon name="angle-right" style={{ marginRight: 20 }} size={30} color="#696969" />
    //       </View>
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
}

export default ProfileContainer;   