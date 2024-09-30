// LoginScreen.js
import React, { useState } from 'react';
import { Text, ImageBackground, StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// Use require for local assets
const image = require('../assets/fruit3.png');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  const loginWithUsernameAndPassword = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Profile');  // Make sure 'Profile' matches the route name in App.js
    } catch {
      setNotice("You entered a wrong username or password.");
    }
  };
  

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Login</Text>
        
        {notice !== "" && (
          <View style={styles.alertContainer}>
            <Text style={styles.alertText}>{notice}</Text>
          </View>
        )}

        {/* Login form */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="white"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            autoCapitalize="none"
            placeholderTextColor="white"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.submitButtonContainer} onPress={loginWithUsernameAndPassword}>
            <Text style={styles.submitButton}>Submit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupRedirect}>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 50,
    top: -100,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    top: -90,
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 20,
    color: 'white',
  },
  submitButtonContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: '30%',
    right: -140,
    marginHorizontal: '30%',
  },
  submitButton: {
    color: '#332410',
    fontSize: 30,
    left: 7,
    top: 0,
    fontFamily: 'Farah',
  },
  signupRedirect: {
    marginTop: 20,
    alignItems: 'center',
  },
  signupText: {
    color: 'blue',
  },
  alertContainer: {
    marginBottom: 10,
  },
  alertText: {
    color: 'red',
  },
});

export default LoginScreen;
