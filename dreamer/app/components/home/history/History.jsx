import React from 'react'
import { View, Text, SafeAreaView, TextInput} from 'react-native'
import { useRouter } from 'expo-router';

import styles from './history.style'

const History = () => {

  const router = useRouter();

  return (
    <View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style = {styles.welcomeMessage}> how much of a dreamer {'\n'} were you last night?</Text>
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

export default History