import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Celsius from './src/Components/Celsius';
import Fahrenheit from './src/Components/Fahrenheit';
import Kelvin from './src/Components/Kelvin';

import CalcularCelsius from './src/Components/CalcularCelsius';
import CalcularFahrenheit from './src/Components/CalcularFahrenheit';
import CalcularKelvin from './src/Components/CalcularKelvin';

function CelsiusStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Celsius" component={Celsius} />
      <Stack.Screen name="CalcularCelsius" component={CalcularCelsius} 
        options={{
          title: "Calculando °C",
        }}
      />
    </Stack.Navigator>
  );
}

function FahrenheitStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Fahrenheit" component={Fahrenheit} />
      <Stack.Screen name="CalcularFahrenheit" component={CalcularFahrenheit} 
        options={{
          title: "Calculando °F",
        }}
      />
    </Stack.Navigator>
  );
}

function KelvinStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Kelvin" component={Kelvin}/>
      <Stack.Screen name="CalcularKelvin" component={CalcularKelvin} 
        options={{
          title: "Calculando K",
        }}
      />
    </Stack.Navigator>
  );
}

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="°C" component={CelsiusStack} 
        initialParams={{ temperatureUnit: 'C' }}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Text style={{color: color, fontSize: size}}> °C </Text>
          },
          headerShown: false,
          tabBarShowLabel: false,
          title: "Celsius",
        }}

      />
      <Tab.Screen name="°F" component={FahrenheitStack} 
        initialParams={{ temperatureUnit: 'F' }}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Text style={{color: color, fontSize: size}}> °F </Text>
          },
          headerShown: false,
          tabBarShowLabel: false,
          title: "Fahrenheit"
        }}
        
      />
      <Tab.Screen name="°K" component={KelvinStack} 
        initialParams={{ temperatureUnit: 'K' }}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Text style={{color: color, fontSize: size}}> K </Text>
          },
          headerShown: false,
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