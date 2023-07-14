import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from '../pages/home';
import splash from '../pages/splash';
import pesanan from '../pages/pesanan';
import account from '../pages/account';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={home} />
            <Tab.Screen name="Pesanan" component={pesanan} />
            <Tab.Screen name="Account" component={account} />
        </Tab.Navigator>
    );
}; 

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='MainApp'>
      <Stack.Screen
        name="Splash"
        component={splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
