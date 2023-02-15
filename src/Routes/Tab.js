import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Stack from './Stack';
import Calcular from '../Components/Calcular';

export default function Tab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CFK" component={Stack} />
      <Tab.Screen name="Calcular" component={Calcular} />
    </Tab.Navigator>
  );
}