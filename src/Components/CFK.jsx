import React, {useEffect, useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

export default function CFK({route}) {

  const navigate = useNavigation()
  const [temperatureUnit, setTemperatureUnit] = useState(route.params?.temperatureUnit)

 return (
  <View style={styles.container}>

      {temperatureUnit == "C" &&
      
        <View style={styles.rowsArea}>
          <TouchableOpacity style={styles.row} onPress={() => navigate.navigate("Calcular", {temperatureUnit: "c"})}>

            <Text style={styles.rowText}> °F </Text>
            <Feather style={styles.rowArrow} name='arrow-right'/>
            <Text style={styles.rowText}> °C </Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.row} onPress={() => navigate.navigate("Calcular", {temperatureUnit: "c"})}>

            <Text style={styles.rowText}> K </Text>
            <Feather style={styles.rowArrow} name='arrow-right'/>
            <Text style={styles.rowText}> °C </Text>

          </TouchableOpacity>
        </View>

      }

      {temperatureUnit == "F" &&
      
      <View style={styles.rowsArea}>
        <TouchableOpacity style={styles.row} onPress={() => navigate.navigate("Calcular", {temperatureUnit: "f"})}>

          <Text style={styles.rowText}> °C </Text>
          <Feather style={styles.rowArrow} name='arrow-right'/>
          <Text style={styles.rowText}> °F </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={() => navigate.navigate("Calcular", {temperatureUnit: "f"})}>

          <Text style={styles.rowText}> K </Text>
          <Feather style={styles.rowArrow} name='arrow-right'/>
          <Text style={styles.rowText}> °F </Text>

        </TouchableOpacity>
      </View>

      }

      {temperatureUnit == "K" &&
      
      <View style={styles.rowsArea}>
        <TouchableOpacity style={styles.row} onPress={() => navigate.navigate("Calcular", {temperatureUnit: "k"})}>

          <Text style={styles.rowText}> °F </Text>
          <Feather style={styles.rowArrow} name='arrow-right'/>
          <Text style={styles.rowText}> K </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.row} onPress={() => navigate.navigate("Calcular", {temperatureUnit: "k"})}>

          <Text style={styles.rowText}> °C </Text>
          <Feather style={styles.rowArrow} name='arrow-right'/>
          <Text style={styles.rowText}> K </Text>

        </TouchableOpacity>
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
  rowsArea: {

    paddingHorizontal: "17%",
    borderColor: "#000",
    elevation: 2,
    borderRadius: 50

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