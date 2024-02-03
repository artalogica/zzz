import{ useState, useEffect, useRef} from 'react';
import { Text, ScrollView, SafeAreaView, View, useColorScheme } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { StyleSheet, Image } from 'react-native';

import { EditScreenInfo } from '../components';
import { COLORS, icons, images, SIZES } from '../constants';
import { FeedHome, History, Welcome, ScreenHeaderBtn } from '../components';

import {Camera, CameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import styles from '../styles/search';

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style = {styles.container}>

            <Stack.Screen 
                options = {{
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
                    <FeedHome />
                    <History />

                </View>

            </ScrollView>
            
        </SafeAreaView>
    );
}

export default Home;