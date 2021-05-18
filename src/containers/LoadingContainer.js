import React, { useContext } from 'react';
import { AppContext } from './../contexts/AppContext';
import Loading from './../components/Loading';
function LoadingContainer(props) {
  const { isLoading } = useContext(AppContext);
  return (
    <Loading isLoading={isLoading} navigation={props.navigation} />
  );
}

export default LoadingContainer;