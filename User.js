import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Button, ScrollView, SafeAreaView, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function User() {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.card}>
            <Text style={styles.heading3}>John Doe</Text>
            <Text>Points: 400</Text>
            <Pressable style={styles.card}>
              <Text>Redeem Points</Text>
          </Pressable>
          </View> 
        </View>

        <View style={styles.mainSection}>
          <View style={styles.card}>
            <Text style={styles.heading2}>Profile</Text>
            <Text>Email:</Text>
            <Text>john@doe.com</Text>
            <Text>Phone Number:</Text>
            <Text>(123) 456-7890</Text>
            <Text>Residence:</Text>
            <Text>Ontario Hall</Text>
            <Text>Language:</Text>
            <Text>English</Text>
            <Pressable style={styles.card}>
                <Text>Edit Profile</Text>
            </Pressable>
          </View>
        </View>

        <StatusBar style="auto"></StatusBar>
        <View style={styles.nav}>
          <Pressable onPress={() => navigation.navigate('Home')}>
            <Image style={styles.icon} source={require('./assets/home.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Hub')}>
            <Image style={styles.icon} source={require('./assets/light.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Camera')}>
            <Image style={styles.icon} source={require('./assets/camera.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Contact')}>
            <Image style={styles.icon} source={require('./assets/feedback.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('User')}>
            <Image style={styles.iconCurrent} source={require('./assets/profile.png')}/>
          </Pressable>
        </View>
      </View>
  )
}

export default User


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6F5',
  },
  topSection: {
    backgroundColor: '#216D60',
    paddingTop: 80,
    padding: 20
  },
  topSection2: {
    paddingTop: 80,
    padding: 20
  },
  mainSection: {
    padding: 20
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderColor: '#D9E4E0',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 20
  },
  heading1: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 600
  },
  heading2: {
    fontSize: 20,
    fontWeight: 500
  },
  heading3: {
    fontSize: 16,
    fontWeight: 700
  },
  body: {
    fontSize: 16,
    fontWeight: 400
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
    resizeMode: 'fill',
    opacity: 0.25,
  },
  iconCurrent: {
    width: 44,
    height: 44,
    resizeMode: 'fill',
  },
});