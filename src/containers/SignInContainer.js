import React, { useContext, useEffect } from 'react';
import SignIn from './../components/SignIn';
import { AppContext } from './../contexts/AppContext';

function SignInContainer(props) {
  const { login, user, isLoading } = useContext(AppContext);
  return (
    <SignIn
      login={login}
      user={user}
      isLoading={isLoading}
      navigation={props.navigation} />
  );
}

export default SignInContainer;