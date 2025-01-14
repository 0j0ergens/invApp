import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput } from "react-native";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const image = require("../assets/fruit2.png");

const First = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [household, setHousehold] = useState("");
  const [step, setStep] = useState(1);
  const user = auth.currentUser;
  const formatName = (name) => (
    <Text style={styles.usernameText}>{name}</Text>
  ); 

  const logoutUser = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Login"); 
    } catch (error) {
      console.log("Error signing out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.welcomeText}>
          {step === 1
            ? "How would you like us to call you?"
            : `Hello ${username}! Make your first household to begin:`}
        </Text>

        <TextInput
          style={styles.input}
          placeholder={step === 1 ? "Enter your name" : "Enter household name"}
          placeholderTextColor="white"
          autoCapitalize="none"
          value={step === 1 ? username : household}
          onChangeText={step === 1 ? setUsername : setHousehold}
        />

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => {
            if (step === 1 && username.trim()) {
              setStep(2);
            } else if ((step === 2) && household.trim()){
              navigation.navigate("Hub"); // Navigate to the next screen
            } else {
              alert("Please fill out the required field");
            }
          }}
        >
          <Text style={styles.logoutButtonText}>
            {"Next"}
          </Text>
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
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 20,
    top: -90,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  emailText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  logoutButton: {
    backgroundColor: "pink",
    top: -60,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
  },
  logoutButtonText: {
    color: "black",
    fontSize: 18,
    fontStyle: "italic",
  },
  usernameText: {
    color: "pink", 
    fontSize: 20,
    top: -90,
    textAlign: "center",
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: "pink",
    top: 300,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
  },
  input: {
    width: "90%",
    alignSelf: "center",
    height: 50,
    color: "white",
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    top: -70,
    fontSize: 20,
  },
});

export default First;
