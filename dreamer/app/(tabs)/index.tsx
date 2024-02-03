import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { FeedHome, History, Welcome } from '../components';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Dreamer __user__</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});

// const Home = () => {
//   const router = useRouter();

//   return (
//       <SafeAreaView style = {{flex: 1, backgroundColor: COLORS.lightWhite}}>
//           <Stack.Screen 
//               options = {{
//                   headerStyle: {backgroundColor: COLORS.lightWhite },
//               }}
//           />
//       </SafeAreaView>
//   )
// }

// export default Home;
