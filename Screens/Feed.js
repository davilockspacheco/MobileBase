import { View, Image, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function Feed(){

    const [menssagem, setMenssagem] = useState("")

    return(
        <View style={styles.container}>
            <Image 
            style = {styles.img}
            source={uri = 'https://img.cdndsgni.com/preview/10057856.jpg'}/>

            <Text style={styles.txtTitulo}>Fale Conosco</Text>

            <TextInput
            style = {styles.viewInput}
            placeholder="Nome"
            />
            <TextInput
            style = {styles.viewInput}
            placeholder="E-Mail"
            />
            <TextInput
            style = {styles.viewInput}
            placeholder="Menssagem"
            value={menssagem}
            onChangeText={setMenssagem}
            />

            <Text>Menssagem: {menssagem}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
    alignItems: 'center'
  },
  img: {
    height: 200,
    width: 350
  },
  viewInput: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 12,
    margin: 12,
    borderWidth: 1,
    height: 30,
    width: 150
  },
  txtTitulo: {
    fontSize: 26,
    marginTop: 40
  }

})
