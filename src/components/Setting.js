import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

function Setting(props) {
  const { t, i18n } = useTranslation();
  const { language, changeLanguage } = props;
  const [languageShow, setLanguageShow] = useState('vn');
  useEffect(()=>{
    setLanguageShow(language);
  },[language]);
  let changeLanguageShow=(value)=>{
    changeLanguage(value);
    i18n.changeLanguage(value);
  }
  return (
    <View>
      <Text style={{ fontSize: 20, paddingTop: 35, paddingBottom: 25, paddingLeft: 10 }}>{t('ChooseLanguages')}</Text>
      <RadioButton.Group onValueChange={value => {changeLanguageShow(value)}} value={languageShow}>
        <RadioButton.Item style={{ borderTopWidth: 1, borderColor: '#a9a9a9' }} mode='ios' label="Vietnamese" value="vn" />
        <RadioButton.Item style={{ borderTopWidth: 1, borderColor: '#a9a9a9' }} mode='ios' label="English" value="en" />
      </RadioButton.Group>
    </View>
  );
}

export default Setting;