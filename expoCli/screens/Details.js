import { View } from "react-native";
import { Text, TextInput, StyleSheet, ImageBackground } from "react-native";
import { useState } from "react";
import background from "../assets/detailBckGrnd.jpg";

export default function Details({ navigation }) {
  const [details, setDetails] = useState("I love munros");

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.titleText}>{navigation.getParam("title")}</Text>
        <View style={styles.notesCont}>
        <Text>{navigation.getParam('details')}</Text>

        </View>
        <TextInput
          style={styles.input}
          placeholder={details}
          onChangeText={(val) => {
            setDetails(val);
          }}
          multiline
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  titleText: {
    color: "#F4DDC2",
        fontSize: 50,
        marginTop: 40,
        textAlign: 'center'
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
  notesCont: {
    borderWidth: 1,
    borderColor: "#777",
    width: '90%',
    borderRadius: 10,
    padding: 5,
    alignSelf: "center",
    height: 'auto'
  }
});
