import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, Alert, StyleSheet, ImageBackground} from "react-native";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const image = require('../assets/fruit3.png');

// Replace useNavigate with navigation provided by react-navigation
const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notice, setNotice] = useState("");

    const signupWithUsernameAndPassword = async () => {
        if (password === confirmPassword) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                navigation.navigate("First");  // Navigate back to login after signup
            } catch {
                setNotice("Sorry, something went wrong. Please try again.");
            }     
        } else {
            setNotice("Passwords don't match. Please try again.");
        }
    };

    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>SignUp</Text>
        {notice !== "" && (
          <View style={styles.alertContainer}>
            <Text style={styles.alertText}>{notice}</Text>
          </View>
        )}

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="white"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="white"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <View style={styles.loginRedirect}>
          <Text style={{color: "white", fontSize: 20}}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}>Login.</Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.submitButtonContainer} onPress={signupWithUsernameAndPassword}>
          <Text style={styles.submitButton}>Enter</Text>
        </TouchableOpacity>

   


        </View>
        </ImageBackground>
      </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 50,
        top: -70,
        },

  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center',
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
  submitButtonContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
    left: 20, 
    width: '25%',
    alignSelf: 'center',
    marginTop: -10,
  },
  submitButton: {
    color: '#332410',
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
  },
  alertContainer: {
    marginBottom: 10,
    backgroundColor: '#f8d7da',
    padding: 10,
    borderRadius: 5,
  },
  alertText: {
    color: '#842029',
    textAlign: 'center',
  },
  loginRedirect: {
    marginTop: -50,
    left: -20, 
    alignItems: 'center',

  },
  loginText: {
    backgroundColor: 'pink', 
    top: -24,
    left: 140, 
    fontSize: 20,  
    fontStyle: 'italic', 
    color: 'black', 
  },
});

export default SignupScreen;
