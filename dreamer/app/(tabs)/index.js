import{ useState, useEffect, useRef} from 'react';
import { Text, ScrollView, SafeAreaView, View, useColorScheme } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { StyleSheet, Image } from 'react-native';
import Icon from '@expo/vector-icons/Entypo';
import Posts from '../components/Posts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { EditScreenInfo } from '../components';
import { COLORS, icons, images, SIZES } from '../constants';
import { Stats, History, Welcome, ScreenHeaderBtn} from '../components';

import {Camera, CameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import styles from '../styles/search';

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style = {{flex: 1, backgroundColor: COLORS.black}}>

            <Stack.Screen 
                options = {{
                    headerTintColor: COLORS.black,
                    headerStyle: {backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl = {icons.menu} dimension = "60%" />
                    ),
                    headerRight: () => {
                        <ScreenHeaderBtn iconUrl = {images.profile} dimension = "100%" />
                    },
                    headerTitle: "Welcome"
                }}
            />

            <ScrollView showsVerticalScrollIndicator = {false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome />
                    <Stats />
                    <History />

                </View>

            </ScrollView>
            
        </SafeAreaView>
    );
}

export default Home;