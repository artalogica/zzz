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

import styles from './welcome.style'

const Welcome = () => {

  const router = useRouter();

  return (
    <View>
      <View style = {styles.container}>
        <Text style = {styles.userName}> Hello _user_name_</Text>
        <Text style = {styles.welcomeMessage}> Get a good sleep schedule</Text>
      </View>

      <View style = {styles.searchContainer}>
        <View style = {styles.searchWrapper}>
          <TextInput
            style = {styles.searchInput}
          />
        </View>
      </View>

    </View>
  )
}

export default Welcome