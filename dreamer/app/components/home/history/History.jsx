import React, {useState} from 'react'
import { View, Text, Image, SafeAreaView, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native'
import { useRouter } from 'expo-router';

import styles from './history.style'
import { isSearchBarAvailableForCurrentPlatform } from 'react-native-screens';

const img_1 = require("../../../assets/images/IMG_9924.png");

const History = () => {

  const router = useRouter();

  return (
    <View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView showsVerticalScrollIndicator = {false}>
        <Text style = {styles.welcomeMessage}> how much of a dreamer {'\n'} were you last night?</Text>
          <View style = {styles.searchContainer}>
            <SafeAreaView style = {styles.searchWrapper}>
              <TextInput
                style = {styles.searchInput}
                // placeholder= 'write about your night!'
              />   
            </SafeAreaView>
          </View>
        <Text style = {styles.log}> 
                  My Most Recent Sleep Pic: {'\n'}
        </Text>
        <Image
            style = {styles.box}
            source = {img_1}
          />
      </ScrollView>
    </View>
  )
}

export default History