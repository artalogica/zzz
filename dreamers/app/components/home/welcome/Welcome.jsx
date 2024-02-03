import { useState } from 'react'
import { UserContext } from "../../../context/user.context";

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
  const {user} = useContext(UserContext);

  return (
    <View>
      <View style = {styles.container}>
        <Text style = {styles.userName} > Hello {user} </Text> 
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