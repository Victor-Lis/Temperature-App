import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Calcular from './src/Components/Calcular';
import CFK from './src/Components/CFK';

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CFK" component={CFK} options={{

        headerShown: false,

      }}/>
      <Stack.Screen name="Calcular" component={Calcular} />
    </Stack.Navigator>
  );
}

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="°C" component={StackNavigation} 
        initialParams={{ temperatureUnit: 'C' }}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Text style={{color: color, fontSize: size}}> °C </Text>
          },
          tabBarShowLabel: false,
          title: "Celsius"
        }}

      />
      <Tab.Screen name="°F" component={StackNavigation} 
      
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Text style={{color: color, fontSize: size}}> °F </Text>
          },
          tabBarShowLabel: false,
          title: "Fahrenheit"
        }}
        
      />
      <Tab.Screen name="K" component={StackNavigation} 
      
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Text style={{color: color, fontSize: size}}> K </Text>
          },
          tabBarShowLabel: false,
          title: "Kelvin"
        }}
        
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>

      <BottomTab/>

    </NavigationContainer>
  );
}

export default App;