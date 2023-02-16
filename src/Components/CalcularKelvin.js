import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { useNavigation, TabActions } from '@react-navigation/native';

export default function CalcularKelvin({route}) {

  const navigation = useNavigation()

  const jumpToAction = TabActions.jumpTo('°K');

  const [temperatureUnit, setTemperatureUnit] = useState(route.params?.temperatureUnit)

  useEffect(() => {

    

  }, [temperatureUnit])

 return (
   <View style={styles.container}>

        <TouchableOpacity style={styles.goBack} onPress={() => navigation.navigate("°K")}>

            <Text style={{color: "red", fontSize: 22.5}}> Voltar </Text>

        </TouchableOpacity>
        <Text> {`°${temperatureUnit.toUpperCase()}`} </Text>

   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: "column"
      },
      goBack: {
    
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: "#f6f6f6",
        alignItems: "center",
        elevation: 2,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        borderColor: "#000",
        marginBottom: "50%"
    
      }
})