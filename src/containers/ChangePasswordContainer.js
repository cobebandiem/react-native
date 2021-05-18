import React, { useContext } from 'react';
import ChangePassword from '../components/ChangePassword';
import { AppContext } from './../contexts/AppContext';

function ChangePasswordContainer(props) {
  const { changePassword } = useContext(AppContext);
  return (
    <ChangePassword changePassword={changePassword} />
  );
}

export default ChangePasswordContainer;