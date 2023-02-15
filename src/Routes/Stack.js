import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import CFK from '../Components/CFK';
import Calcular from '../Components/Calcular';

export default function Stack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CFK" component={CFK} />
      <Stack.Screen name="Calcular" component={Calcular} />
    </Stack.Navigator>
  );
}