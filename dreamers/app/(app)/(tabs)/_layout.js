import React from 'react';
import { Stack } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { useCallback} from 'react';
import {useFonts} from 'expo-font';
import {Entypo, AntDesign} from '@expo/vector-icons'
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

import { Pressable } from 'react-native';

import Colors from '@/app/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

function TabBarIcon(props) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
  }

export default function TabLayout() {
    const [fontsLoaded] = useFonts({
        DMBold: require('../../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../../assets/fonts/DMSans-Medium.ttf'),
        DMRegulat: require('../../assets/fonts/DMSans-Regular.ttf')
    })

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;

  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        onLayout = {onLayoutRootView}
        name="index"
        options={{
          title: 'Home',
           tabBarIcon: ({ color }) => <Entypo name="home" color={color} size={28}/>,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

        <Tabs.Screen
            name="camera"
            options={{
            title: 'Camera',
            tabBarIcon: ({ color }) => <AntDesign name="smileo" color={color} size={28}/>
            }}
        />

      <Tabs.Screen
        name="two"
        options={{
          title: 'Feed',
        tabBarIcon: ({ color }) => <Entypo name="moon" color={color} size={28} />,
        }}
      />

    <Tabs.Screen
        name="three"
        options={{
          title: 'Awake',
        tabBarIcon: ({ color }) => <Entypo name="clock" color={color} size={28} />,
        }}
      />
    </Tabs>
  );
}
