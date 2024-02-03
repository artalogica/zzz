import React, { useState, useEffect, useRef} from 'react';
import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import {Camera, CameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import Button from '../../components/Button';

export default function TabOneScreen() {
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean|null>(null);
  const [image, setImage] = useState<string|null>(null);
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef<Camera>(null);

  useEffect( () => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status == 'granted');
    }) ();
  }, [])

  const takePicture = async () => {
    if (cameraRef) {
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

  if(hasCameraPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      {!image ?
      <Camera
        style={styles.camera}
        type={type}
        flashMode={flash}
        ref={cameraRef}
        >
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
          }}>
            <Button icon={'cycle'}
            onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back)
            }}/>
            <Button icon={'flash'}
            color={flash === Camera.Constants.FlashMode.off ? 'gray' : '#f1f1f1'}
            onPress={() => {
              setFlash(flash == Camera.Constants.FlashMode.off 
                ? Camera.Constants.FlashMode.on
                : Camera.Constants.FlashMode.off )
            }}/>
          </View>
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
          <Button title={"Post"} icon="paper-plane"/>
        </View>
        :
          <Button color={'#702963'} icon='camera' onPress={takePicture}/>
        }
        </View>
    </View>
    
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
