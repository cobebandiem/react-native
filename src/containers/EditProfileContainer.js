import React, { useContext } from 'react';
import EditProfile from '../components/EditProfile';
import { AppContext } from './../contexts/AppContext';

function EditProfileContainer(props) {
  const { user, editUserInfo, } = useContext(AppContext);
  return (
    <EditProfile user={user} editUserInfo={editUserInfo} />
  );
}

export default EditProfileContainer;