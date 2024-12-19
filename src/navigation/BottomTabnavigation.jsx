import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreens from '../screens/homescreens/HomeScreens';
import SearchScreen from '../screens/searchscreen/SearchScreen';
import Statistics from '../screens/statistics/Statistics';
import Dashboard from '../screens/dashboard/Dashboard';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreens} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Statistics" component={Statistics} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
}

export default MyTabs;
