import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../components/header/Header';
import {ModelButton} from '../../assets/svg/index';
import {Acconticon} from '../../assets/images/index';
import HorizontalDatePicker from '../../components/datepicker/DatePicker';

const HomeScreens = () => {
  const dates = [
    { day: 'Mon', date: 21 },
    { day: 'Tue', date: 22 },
    { day: 'Wed', date: 23 },
    { day: 'Thu', date: 24 },
    { day: 'Fri', date: 25 },
    { day: 'Sat', date: 26 },
    { day: 'Sun', date: 27 },
  ];
  return (
    <View style={styles.container}>
      <Header
        icon={<ModelButton width={22} height={18} />}
        title={'Home'}
        icon2={<Image source={Acconticon} style={{width: 50, height: 50}} />}
      />
      <View style={styles.calender}>
      <HorizontalDatePicker dates={dates} />
      </View>
    </View>
  );
};
const styles=StyleSheet.create({
  container:{
height:'100%',
flex:1,

  },
calender:{
  width:"100%",

  top:30
}
})
export default HomeScreens;
