import React, {useState , useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Linking } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

const DateTime = () => {
    var [date,setDate] = useState(new Date());
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
    return(
        <View>
            <Text style={styles.time}> {date.toLocaleTimeString()}</Text>
        </View>
    )
}

export default function TabThreeScreen() {
  const handlePress = () => {
      // You can use Linking to open URLs
      Linking.openURL('../');
  };
  return (
    <View style={styles.container}>
        <DateTime></DateTime>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}> I'M AWAKE </Text>
        </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    backgroundColor: '#75559B', // Button background color
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white', // Button text color
    fontSize: 30,
    fontWeight: 'bold',
  },
  time: {
    color: 'white', // Button text color
    fontSize: 30,
    fontWeight: 'bold',
  },
});