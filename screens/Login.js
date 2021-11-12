import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, TextInput } from 'react-native';
import { initializeApp } from "firebase/app";
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";

export default function Login({ navigation }) {
  
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
  
    const firebaseConfig = {
      apiKey: "AIzaSyA1vMC4KxCj6SWfa0Lviyy7gDb7DqJV_Tk",
      authDomain: "atividade-8738b.firebaseapp.com",
      projectId: "atividade-8738b",
      storageBucket: "atividade-8738b.appspot.com",
      messagingSenderId: "354479064723",
      appId: "1:354479064723:web:6f3fbdf2fda74c442baf66"
    };
  
    const app = initializeApp(firebaseConfig);
  
    function loginFirebase(){
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          const user = userCredential.user;
          navigation.navigate('ListaContatos');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  
    return (
      <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>email</Text>
        <TextInput style={styles.input} value={email} onChangeText={email => setEmail(email)} />
        <Text style={styles.title}>senha</Text>
        <TextInput style={styles.input} secureTextEntry={true} value={senha} onChangeText={senha => setSenha(senha)} />
        <Button
          title="Login"
          onPress={() => {loginFirebase()}}
        />
        <br />
        <Button
          title="Cadastre-se"
          color="red"
          onPress={() => navigation.navigate('CadastroUsuario')}
        />
      </View>
    </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      fontSize: 30,
      margin: 12,
      textAlign: 'left',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });