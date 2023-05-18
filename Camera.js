import { Camera } from 'expo-camera';
import { useState, useEffect } from 'react';
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function CameraScreen() {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [permission, setPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setPermission(status);
    })();
  }, []);

  if (permission === null) {
    // Camera permission is not yet determined
    return <View />;
  }

  if (permission !== 'granted') {
    // Camera permission is not granted
    return <Text>No access to camera</Text>;
  }

  function toggleCameraType() {
    setType((current) =>
      current === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Image style={styles.flip} source={require('./assets/flip-camera.png')}/>
          </TouchableOpacity>
        </View>
        <Image style={styles.frame} source={require('./assets/frame.png')}/>
        <Text style={styles.heading1}>Scan your item to identify where it belongs</Text>
      </Camera>
      <View style={styles.nav}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Image style={styles.icon} source={require('./assets/home.png')}/>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Hub')}>
          <Image style={styles.icon} source={require('./assets/light.png')}/>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Camera')}>
          <Image style={styles.iconCurrent} source={require('./assets/camera.png')}/>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Contact')}>
          <Image style={styles.icon} source={require('./assets/feedback.png')}/>
        </Pressable>
        < Pressable onPress={() => navigation.navigate('User')}>
          <Image style={styles.icon} source={require('./assets/profile.png')}/>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  heading1: {
    fontSize: 16,
    fontWeight: 500,
    color: '#fff',
    position: 'absolute',
    bottom: 140,
    textAlign: 'center',
    alignSelf: 'center',
    
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    top: 60,
    right: 20,
    width: 70,
    height: 50,
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 4,
    alignItems: 'center',
  },
  flip: {
    width: 36,
    resizeMode: 'contain'
  },
  frame: {
    position: 'absolute',
    alignSelf: 'center',
    top: '12%',
    width: '80%',
    resizeMode: 'contain'
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
  nav: {
    position: 'absolute',
    bottom:0,
    flex: 1,
    width: '100%',
    height: 100,
    paddingHorizontal: 8,
    paddingTop: 12,
    backgroundColor: '#F3F6F5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: '#D9E4E0',
    borderTopWidth: 1,
  },
  icon: {
    width: 44,
    height: 44,
    resizeMode: 'contain',
    opacity: 0.25,
  },
  iconCurrent: {
    width: 44,
    height: 44,
    resizeMode: 'contain',
  },
});
