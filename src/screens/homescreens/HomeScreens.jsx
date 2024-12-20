import {View, Text, Image} from 'react-native';
import React from 'react';
import Header from '../../components/header/Header';
import {ModelButton} from '../../assets/svg/index';
import {Acconticon} from '../../assets/images/index';

const HomeScreens = () => {
  return (
    <View style={{flex: 1}}>
      <Header
        icon={<ModelButton width={22} height={18} />}
        title={'Home'}
        icon2={<Image source={Acconticon} style={{width: 50, height: 50}} />}
      />
    </View>
  );
};

export default HomeScreens;
