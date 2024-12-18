import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './BottomTabnavigation';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
        console.log("🚀 ~ AppNavigator ~ MyTabs:", MyTabs)
};

export default AppNavigator;
