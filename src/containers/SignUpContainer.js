import React, { useContext } from 'react';
import SignUp from './../components/SignUp';
import { AppContext } from './../contexts/AppContext';

function SignUpContainer(props) {
  const { register } = useContext(AppContext);
  return (
    <SignUp register={register} />
  );
}

export default SignUpContainer;