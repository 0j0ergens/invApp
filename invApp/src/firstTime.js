import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const image = require('../assets/fruit2.png');

const First = ({ navigation }) => {
  // Move useState inside the component
  const [username, setUsername] = useState("");
  const user = auth.currentUser;

  const logoutUser = async () => {
    try {
      await signOut(auth);
      navigation.navigate('Login');  // Navigate to the login screen after logout
    } catch (error) {
      console.log("Error signing out:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* ImageBackground should wrap other components */}
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        
        <Text style={styles.welcomeText}>
          Welcome <Text style={styles.emailText}>{user?.email}</Text>, you are logged in!
        </Text>

        <Text style={styles.welcomeText}>
          How would you like us to call you?
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="white"
          autoCapitalize="none"
          value={username}
          onChangeText={setUsername}
        />

        {/* Logout button */}
        <TouchableOpacity style={styles.logoutButton} onPress={logoutUser}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 20,
    top: -220, 
    color: 'white', 
    textAlign: 'center',
    marginBottom: 20,
  },
  emailText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  logoutButton: { 
    backgroundColor: 'pink',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  logoutButtonText: {
    color: 'black',
    fontSize: 18,
    fontStyle: 'italic',
  },
  input: {
    height: 50,
    color: 'white', 
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    top: -50, 
    fontSize: 20,
  },
});

export default First;
