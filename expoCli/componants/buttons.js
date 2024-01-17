import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';


export default function ProjectButton({ id }){

const [show, setShow] = useState(false)

   function pressProjBtn(numb){

        setShow((curr) => {!curr})
        alert(numb)

    }

const projects = [{id: 0, title: "My Munro App"}, {id: 1, title: "In Sheffield"}]


return (
    <View>
    <Pressable style={styles.projBtn} onPress={()=>{pressProjBtn(id)}}><Text style={styles.projBtnText}>{projects[id].title}</Text></Pressable>
    </View>
)

}

const styles = StyleSheet.create({
    projBtnText: {
        textAlign: 'center',
        color: '#F53F65',
        fontSize: 30
    },
    projBtn: {
        backgroundColor: '#F1E3D6',
        borderRadius: 10,
        padding: 10,
    
    }
}
  );
  