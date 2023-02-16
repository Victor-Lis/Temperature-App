import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';

import { useNavigation, TabActions } from '@react-navigation/native';

export default function CalcularFahrenheit({route}) {

  const navigation = useNavigation()

  const [temperatureUnit, setTemperatureUnit] = useState(route.params?.temperatureUnit)

  const [value, setValue] = useState("")

 return (
    <View style={styles.container}>

      <View style={styles.row}>
      
          <Text style={{color: "red", fontSize: 20}}> {temperatureUnit == "C" ? `°${temperatureUnit}` : ` ${temperatureUnit}`} </Text>
          <TextInput style={styles.input} onChangeText={setValue} value={value} maxLength={7} keyboardType="numeric"/>  

      </View>

      {value != "" &&
  
        <View style={styles.row}>

          <Text style={{color: "blue", fontSize: 20}}> °F </Text>
          <Text style={styles.input}> {temperatureUnit == "C" ? ((value * 1.8) + 32).toFixed(3) : (value * 9/5) - 459.67.toFixed(3)} </Text>

        </View>
  
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column"
  },
  row: {

    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f6f6f6",
    borderRadius: 20,
    margin: 10, 
    minWidth: 100,
    elevation: 2

  }, 
  input: {

    width: "20%",
    marginHorizontal: 5,

  }
})