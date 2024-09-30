import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const ProfileScreen = ({ navigation }) => {
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
      <Text style={styles.welcomeText}>
        Welcome <Text style={styles.emailText}>{user?.email}</Text>, you are logged in!
      </Text>

      <TouchableOpacity style={styles.logoutButton} onPress={logoutUser}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  emailText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  logoutButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
