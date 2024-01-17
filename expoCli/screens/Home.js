import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import background from "../assets/background.jpg";
import ProjectButton from "../componants/buttons";
import { useState } from "react";
import * as React from "react";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.push("Details");
  };

  const projList = [{id: 0, title: "My Munro App", details: 'I love munros, they auyg uregfh uye gugr uhgv efvh  iuh uhi vuhe v iuhrihu euhfhv ihuev hiveiuhefu h vihueuv ihuveuhi vhviu ', language: 'React'}, {id: 1, title: "In Sheffield", details: 'I love Sheff!!', language: 'React'}]

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Keeping Track</Text>
        <StatusBar style="auto" />
        <View style={styles.projectBtnContainer}>
        <FlatList data={projList} renderItem={({ item })=> (<View style={styles.projectBtns}>
                <ProjectButton id={item.id} style={styles.projectComp}/>
                <Pressable onPress={()=> {navigation.navigate('Details', item)}} style={styles.projBtn}>
                  <Text style={styles.projBtnText}>Open</Text>
                </Pressable>
              </View>)}/>
        </View>
        <View style={styles.input_container}></View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    width: "100%",
  },
  title: {
    color: "#F4DDC2",
    fontSize: 50,
    marginTop: 40,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  projectBtnContainer: {
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: "50%",
    backgroundColor: "rgba(0, 0, 0, .4)",
    borderRadius: 10,
    color: "white",
  },
  input_container: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  projectBtns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
    margin: 3
  }, 
  projBtnText: {
    textAlign: 'center',
    color: '#93A1D4',
    fontSize: 30
},
projBtn: {
    backgroundColor: '#F1E3D6',
    borderRadius: 10,
    padding: 10,

}, 
projectComp: {
    flex: 1}
});
