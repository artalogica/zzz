import React, { useState, useEffect, useRef} from 'react';
import { StyleSheet, Image, SafeAreaView, Platform } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import * as ImagePicker from 'expo-image-picker';
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

import {Camera, CameraType} from 'expo-camera';
import {shareAsync} from 'expo-sharing';

import * as MediaLibrary from 'expo-media-library';

import Button from '../components/Button';

export default function TabOneScreen() {
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean|null>(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState<boolean|null>(null);
  const [image, setImage] = useState<string|null>(null);
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef();

  useEffect( () => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      const MediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraStatus.status == 'granted');
      setHasMediaLibraryPermission(MediaLibraryPermission.status == "granted");
    }) ();
  }, [])

  const takePicture = async () => {

    if (cameraRef && cameraRef.current != undefined) {

      try{
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch(e){
        console.log(e);
      }
    }
  }
  
  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert('Saved to Camera Roll')
        setImage(null);
      } catch(e) {
        console.log(e)
      }
    }
  }

  // const displayImage = async () => {
  //   return (
  //     <View style = {styles.container}>
  //       <Image style = {styles.camera}>
  //         source = {{image}}
  //       </Image>
  //     </View>
  //   )
  // }

  const sharePic= async () => {
    const uploadUri = image;
    let filename = uploadUri?.substring(uploadUri.lastIndexOf('/') + 1);

    setUploading(true);

    try {
      // await ImagePicker.requestCameraPermissionsAsync();
      // let result = await ImagePicker.launchCameraAsync();
      await storage().ref(filename).putFile(uploadUri);
      setUploading(false);
    } catch (error) {
      console.log(e);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const CameraPreview = ({photo}: any) => {
    console.log('sdsfds', photo)
    return (
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <ImageBackground
          source={{uri: photo && photo.uri}}
          style={{
            flex: 1
          }}
        />
      </View>
    )
  }

  if(hasCameraPermission === false || hasCameraPermission === undefined) {

    return <Text>No access to camera</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      {!image ?
      <Camera
        style={styles.camera}
        type={type}
        flashMode={flash}
        ref={cameraRef}
        >
        </Camera>
        :
        <Image source={{uri: image}} style={styles.camera} />
      }
      <View>
        {image ?
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
          <Button title={"Re-take"} icon="cross" onPress={() => setImage(null)} />
          <Button title={"Save"} icon="check" onPress={saveImage}/>
          <Button title={"Post"} icon="paper-plane" onPress={sharePic}/>
        </View>
        :
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
          <Button icon={'cycle'}
          onPress={() => {
            setType(type === CameraType.back ? CameraType.front : CameraType.back)
          }}/>
          <Button color={'#f1f1f1'} icon='camera' onPress={takePicture}/>
          <Button icon={'flash'}
          color={flash === Camera.Constants.FlashMode.off ? 'gray' : '#f1f1f1'}
          onPress={() => {
            setFlash(flash == Camera.Constants.FlashMode.off 
              ? Camera.Constants.FlashMode.on
              : Camera.Constants.FlashMode.off )
          }}/>
        </View>
         
        }
        </View>
    </SafeAreaView>
    
  );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15
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
  camera: {
    flex:1,
    borderRadius: 10,
    justifyContent: 'space-between',
    width: "100%"
  }
});

