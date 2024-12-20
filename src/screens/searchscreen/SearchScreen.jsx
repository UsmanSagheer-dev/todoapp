import { View, Text,Image } from 'react-native';
import React from 'react';
import { ArrowBack, Billicon, ModelButton } from '../../assets/svg/index';
import { Acconticon } from '../../assets/images/index';
import Header from '../../components/header/Header';

const SearchScreen = () => {
  return (
    <View>
     <Header
        icon={<ArrowBack width={18} height={18} />}
        title={'Search'}
        icon2={<Billicon width={16} height={18}/>}
      />
    </View>
  );
};

// eslint-disable-next-line semi
export default SearchScreen
