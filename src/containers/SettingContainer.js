import React, { useContext } from 'react';
import Setting from '../components/Setting';
import { AppContext } from './../contexts/AppContext';

function SettingContainer(props) {
  const { language, changeLanguage } = useContext(AppContext);
  return (
    <Setting language={language} changeLanguage={changeLanguage} />
  );
}

export default SettingContainer;