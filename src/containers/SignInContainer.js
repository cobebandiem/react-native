import React, { useContext, useEffect } from 'react';
import SignIn from './../components/SignIn';
import { AppContext } from './../contexts/AppContext';

function SignInContainer(props) {
  const { login, user, isLoading, language, changeLanguage } = useContext(AppContext);
  return (
    <SignIn
      login={login}
      user={user}
      isLoading={isLoading}
      language={language}
      changeLanguage={changeLanguage}
      navigation={props.navigation} />
  );
}

export default SignInContainer;