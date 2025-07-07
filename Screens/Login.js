import { useState } from "react";
import {View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function Login({navigation}){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return(
        <View style = {styles.containerProfile}>

        <View style={styles.containerProfile}>
            <Text style={styles.txtTitulo} >
                Seja bem vindo a
            <Text style={styles.txtBestStore}> BestStore </Text>
            </Text>
        </View>
            
        <View style={styles.containerProfile} >
            <TextInput
            style={styles.viewInput}
            placeholder="G-Mail"
            value={email}
            onChangeText={setEmail}
            />

            <TextInput
            style={styles.viewInput}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            />
        </View>

        <View>
            <Button
            style={styles.button}
            title="Entrar"
            onPress={() => navigation.navigate('HomeTab')} 
            />
        </View>
            

        </View>

    );
}

const styles = StyleSheet.create({
  containerProfile: {
    alignItems: 'center',
    flex: 0.5,
    justifyContent: 'center',
    padding: 20,
    // borderWidth: 1,
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
  inputs: {
    alignItems: 'center'
  },
  txtTitulo: {
    fontSize: 30,
  },
  txtBestStore: {
    fontSize: 30,
    color: 'blue'
  },
});
