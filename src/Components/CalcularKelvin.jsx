import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native';

import { useNavigation, TabActions } from '@react-navigation/native';

export default function CalcularKelvin({route}) {

  const navigation = useNavigation()

  const [temperatureUnit, setTemperatureUnit] = useState(route.params?.temperatureUnit)

  const [value, setValue] = useState("")

 return (
    <View style={styles.container}>

      <View style={styles.row}>
      
          <Text style={{color: "red", fontSize: 20}}> °{temperatureUnit} </Text>
          <TextInput style={styles.input} onChangeText={setValue} value={value} maxLength={7} keyboardType="numeric"/>  

      </View>

      {value != "" &&
  
        <View style={styles.row}>

          <Text style={{color: "blue", fontSize: 20}}> K </Text>
          <Text style={styles.input}> {temperatureUnit == "C" ? ((Number(value)+273.15).toFixed(3)).replace(".",",") : ((((value - 32) * (5/9)) + 273.15).toFixed(3)).replace(".",",")} </Text>

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
    elevation: 2

  }, 
  input: {

    width: "35%",
    marginHorizontal: 5,

  }
})