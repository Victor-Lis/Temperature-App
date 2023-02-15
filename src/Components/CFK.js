import React, {useState} from 'react';
import { View, Text } from 'react-native';

export default function CFK({route}) {

    const [temperatureUnit, setTemperatureUnit] = useState(route.params);

 return (
   <View>

        <Text> {temperatureUnit} </Text>

   </View>
  );
}