import { View } from "react-native";
import { Text, Switch, TextInput, StyleSheet, ImageBackground } from "react-native";
import { useState } from "react";
import background from "../assets/detailBckGrnd.jpg";

export default function Details({ navigation }) {
  const [details, setDetails] = useState("I love munros");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const project = navigation.getParam()

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.titleText}>{navigation.getParam("title")}</Text>
       <View style={styles.tags}> 
       <Text>Language: {navigation.getParam('language')}</Text>
       <Text>Completed:</Text>
       <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>

        <View style={styles.notesCont}>
        <Text>{navigation.getParam('details')}</Text>
        </View>
        {/* <TextInput
          style={styles.input}
          placeholder={details}
          onChangeText={(val) => {
            setDetails(val);
          }}
          multiline
        /> */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    padding: 10
  },
  titleText: {
    color: "#F4DDC2",
        fontSize: 50,
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
    width: '100%',
    borderRadius: 10,
    padding: 5,
    alignSelf: "center",
    height: 'auto'
  },
  tags: {
    display: "flex",
    flexDirection: "row",
    alignContent: 'center',
    justifyContent: 'center',
    gap: 10
  }
});
