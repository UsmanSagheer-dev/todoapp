import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreens from '../screens/homescreens/HomeScreens';
import SearchScreen from '../screens/searchscreen/SearchScreen';
import Statistics from '../screens/statistics/Statistics';
import Dashboard from '../screens/dashboard/Dashboard';
import { DashboardIcon, SearchIcon } from '../assets/svg/index';
import { View, Text, StyleSheet } from 'react-native';
import TabButton from '../components/tabButton/TabButton';
import Tabbarscreens from '../screens/tabBarscreems/Tabbarscreens';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          left: 20,
          right: 20,
          paddingTop: 10,
          height: 60,
          borderRadius: 15,
          justifyContent: 'center',
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreens}
        options={{
          tabBarIcon: ({ focused }) => (
            <DashboardIcon
              width={20}
              height={20}
              fill={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SearchIcon
              width={20}
              height={20}
              fill={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TabButton"
        component={Tabbarscreens}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton
            />
           
          
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarIcon: ({ focused }) => (
            <DashboardIcon
              width={20}
              height={20}
              fill={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <DashboardIcon
              width={20}
              height={20}
              fill={focused ? 'black' : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  emptyScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default MyTabs;
