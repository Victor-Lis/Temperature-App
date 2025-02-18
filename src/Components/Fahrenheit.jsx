import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';

export default function Fahrenheit() {

  const navigate = useNavigation()

 return (
   <View style={styles.container}>

        <View style={styles.rowsArea}>
          <TouchableOpacity style={styles.row} onPress={() => navigate.navigate("CalcularFahrenheit", {temperatureUnit: "C"})}>

            <Text style={styles.rowText}> °C </Text>
            <Feather style={styles.rowArrow} name='arrow-right'/>
            <Text style={styles.rowText}> °F </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.row} onPress={() => navigate.navigate("CalcularFahrenheit", {temperatureUnit: "K"})}>

            <Text style={styles.rowText}>  K </Text>
            <Feather style={styles.rowArrow} name='arrow-right'/>
            <Text style={styles.rowText}> °F </Text>

          </TouchableOpacity>
        </View>

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
    rowsArea: {
  
      paddingHorizontal: "15%",
      borderColor: "#000",
      borderRadius: 50,
      borderWidth: 0.5,
  
    },
    row: {
  
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: "space-around"
  
    },
    rowText: {
  
      fontSize: 30,
      paddingHorizontal: 0,
      marginVertical: "20%",
  
  
    },
    rowArrow: {
  
      fontSize: 20,
      color: "red",
      margin: 4.5,
  
    }
  });