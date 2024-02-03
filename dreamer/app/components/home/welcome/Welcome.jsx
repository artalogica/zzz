import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';

import { useRouter } from 'expo-router';

const img = require("../../../assets/images/IMG_9180.png");

import styles from './welcome.style'

const Welcome = () => {

  const router = useRouter();

  return (
    <View>
      <View style = {styles.container}>
        <Text style = {styles.welcomeMessage} > Hello Lillian!</Text>
      </View>
      <Image
            style = {styles.profile}
            source = {img}
          />
    </View>
  )
}

export default Welcome