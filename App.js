import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Button, Pressable } from 'react-native';
import { useState } from 'react';
// import { Stack, useRouter } from 'expo-router';


export default function App() {

  // const router = useRouter();
  
  return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.heading1}>Welcome back, John.</Text>  
        </View>
        <View style={styles.mainSection}>
          <Text style={styles.heading2}>Sorting Waste</Text>  
          <Pressable style={styles.card}>
            <Text>TAP HERE</Text>
          </Pressable>
          <Pressable style={styles.card}>
            <Text>TAP HERE</Text>
          </Pressable>
          <Pressable style={styles.card}>
            <Text>TAP HERE</Text>
          </Pressable>
        </View>
        <StatusBar style="auto"></StatusBar>
        <View style={styles.nav}>
          <TouchableOpacity>
            <Text>Icon 1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Icon 2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Icon 3</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Icon 4</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Icon 5</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

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
  nav: {
    flex: 1,
    backgroundColor: '#F3F6F5',
    fontFamily: 'Inter',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});