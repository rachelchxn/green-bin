import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Button, ScrollView, SafeAreaView, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Stack, useRouter } from 'expo-router';

const Stack = createNativeStackNavigator();

function App() {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>

        <View style={styles.topSection}>
          <Text style={styles.heading1}>Welcome back, User.</Text> 
          <View style={styles.card}>
            <Text style={styles.heading2}>User Stats & Points</Text>  
          </View> 
        </View>

        <View style={styles.mainSection}>
          <Text style={styles.heading2}>Sorting Waste</Text>  
          <Pressable style={styles.card}>
            <Text>Landfill</Text>
          </Pressable>
          <Pressable style={styles.card}>
            <Text>Recycling</Text>
          </Pressable>
          <Pressable style={styles.card}>
            <Text>Green Bin</Text>
          </Pressable>
        </View>

        <StatusBar style="auto"></StatusBar>
        <View style={styles.nav}>
          <Pressable onPress={() => navigation.navigate('App')}>
            <Image source={require('./assets/bl_home.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Hub')}>
            <Image source={require('./assets/light.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Camera')}>
            <Image source={require('./assets/camera.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Contact')}>
            <Image source={require('./assets/feedback.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('User')}>
            <Image source={require('./assets/user.png')}/>
          </Pressable>
        </View>
      </View>
  );
}

function Hub() {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.heading1}>Info Hub</Text> 
          <View style={styles.card}>
            <Text style={styles.heading3}>Quick Links</Text>
            <Text>Topic 1</Text>
            <Text>Topic 2</Text>
            <Text>Topic 3</Text>
          </View> 
        </View>

        <View style={styles.mainSection}>
          <Text style={styles.heading2}>Articles</Text>  
          <Pressable style={styles.card}>
            <Image source={require('./assets/news.png')}/>
            <Text>Article Name</Text>
          </Pressable>
        </View>

        <StatusBar style="auto"></StatusBar>
        <View style={styles.nav}>
          <Pressable onPress={() => navigation.navigate('App')}>
            <Image source={require('./assets/home.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Hub')}>
            <Image source={require('./assets/bl_light.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Camera')}>
            <Image source={require('./assets/camera.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Contact')}>
            <Image source={require('./assets/feedback.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('User')}>
            <Image source={require('./assets/user.png')}/>
          </Pressable>
        </View>
      </View>
  )
}


function Camera() {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
        <View style={styles.topSection2}>
          <Text style={styles.heading2}>Scan your item to identify where it belongs</Text> 
        </View>

        <StatusBar style="auto"></StatusBar>
        <View style={styles.nav}>
          <Pressable onPress={() => navigation.navigate('App')}>
            <Image source={require('./assets/home.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Hub')}>
            <Image source={require('./assets/light.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Camera')}>
            <Image source={require('./assets/bl_camera.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Contact')}>
            <Image source={require('./assets/feedback.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('User')}>
            <Image source={require('./assets/user.png')}/>
          </Pressable>
        </View>
      </View>
  )
}


function Contact() {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
        <View style={styles.topSection2}>
          <Text style={styles.heading2}>Contact Portal</Text> 
          <Text style={styles.body}>How can we help you?</Text> 
        </View>

        <View style={styles.mainSection}>
          <Pressable style={styles.card}>
            <Text>Report/Make a Request</Text>
          </Pressable>
          <Pressable style={styles.card}>
            <Text>Submit Feedback</Text>
          </Pressable>
          <Pressable style={styles.card}>
            <Text>General Help</Text>
          </Pressable>
        </View>

        <StatusBar style="auto"></StatusBar>
        <View style={styles.nav}>
          <Pressable onPress={() => navigation.navigate('App')}>
            <Image source={require('./assets/home.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Hub')}>
            <Image source={require('./assets/light.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Camera')}>
            <Image source={require('./assets/camera.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Contact')}>
            <Image source={require('./assets/bl_feedback.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('User')}>
            <Image source={require('./assets/user.png')}/>
          </Pressable>
        </View>
      </View>
  )
}


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
          <Pressable onPress={() => navigation.navigate('App')}>
            <Image source={require('./assets/home.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Hub')}>
            <Image source={require('./assets/light.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Camera')}>
            <Image source={require('./assets/camera.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Contact')}>
            <Image source={require('./assets/feedback.png')}/>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('User')}>
            <Image source={require('./assets/bl_user.png')}/>
          </Pressable>
        </View>
      </View>
  )
}


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="App"
          component={App} 
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen 
          name="Hub" 
          component={Hub} 
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen 
          name="Camera" 
          component={Camera} 
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen 
          name="Contact" 
          component={Contact} 
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen 
          name="User" 
          component={User} 
          options={{headerShown: false, animation: 'none'}}
        />       
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MyStack;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6F5',
    fontFamily: 'Inter'
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
    flex: 3,
    backgroundColor: '#F3F6F5',
    fontFamily: 'Inter',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});