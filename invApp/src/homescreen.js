// HomeScreen.js
import React from 'react';
import { Text, ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native';

// Use require for local assets
const image = require('../assets/fruit2.png');

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>Inventory.</Text>

        <View style={styles.underContainer}>
          {/* Navigate to Login Screen */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          {/* Navigate to Signup Screen */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
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
    fontSize: 90,
    color: 'white',
    top: -200,
    fontFamily: 'Farah',
  },

  underContainer: {
    flexDirection: 'row',
    top: 80,
  },

  button: {
    padding: 0,
    top: -300,
    left: -13,
    marginHorizontal: 20,
    borderRadius: 5,
  },

  buttonText: {
    color: 'red',
    fontSize: 40,
    fontFamily: 'Farah',
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
