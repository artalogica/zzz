import * as React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from 'expo-router';

const navigation = useNavigation();
export default function TabTwoScreen() {
  const handleButtonPress = () => {
    // Add functionality for button press here
    navigation.navigate('Tab One')
  };
  return (
    <View style={styles.container}>
      
      { 
       <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>I'M AWAKE!</Text>
      </TouchableOpacity> 
      } 
    

    </View>
    
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:  '#FFF'
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
});
