import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Pressable, TextInput, Button } from 'react-native';
import background from './assets/background.jpg'
import ProjectButton from './componants/buttons';
import { useState } from 'react';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
const [details, setDetails] = useState('I love munros')

  return (
    <NavigationContainer>
      <ImageBackground source={background} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      <Text style={styles.title}>Keeping Track</Text>
      <StatusBar style="auto" />
      <View style={styles.projectBtnContainer}>
      <ProjectButton id='0' />
      <ProjectButton id='1' />
      </View>
      <View style={styles.input_container}>
      <TextInput 
        style={styles.input} 
        placeholder={details}
        onChangeText={(val)=>{setDetails(val)}}
        multiline/>
  
      <Button title='Enter'></Button>

      </View>
    </View>
      </ImageBackground>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    width: '100%',
  },
  title: {
    color: '#F53F65',
    fontSize: 50,
    marginTop: 40,
    justifySelf: 'flex-start'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  projectBtnContainer: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: '50%',
    backgroundColor: 'rgba(0, 0, 0, .4)',
    borderRadius: 10,
    color: 'white'
  },
  input_container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  }
});
