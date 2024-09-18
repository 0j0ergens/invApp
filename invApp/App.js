import React, { useState } from 'react';
import { Text, ImageBackground, StyleSheet, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'bootstrap/dist/css/bootstrap.min.css';

const Stack = createNativeStackNavigator();

// Use require for local assets
const image = require('./assets/fruit2.png');
const image2 = require('./assets/fruit.png');
const image3 = require('./assets/fruit3.png');

// Login Screen Component
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image3}
        resizeMode="cover"
        style={styles.image}>
         <Text style={{ color: 'white', fontSize: 50, top: -250 }}>Login</Text>
      </ImageBackground>
    </View>
  );
};

// Signup Screen Component (with signup form)
const SignupScreen = () => {
  // State for form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle Signup logic
  const handleSignup = () => {
    if (name && email && password) {
      Alert.alert('Success', `Welcome, ${name}!`);
    } else {
      Alert.alert('Error', 'Please fill out all fields.');
    }
    
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image3}
        resizeMode="cover"
        style={styles.image}>
         <Text style={{ color: 'white', fontSize: 50, top: -170 }}>SignUp</Text>

         {/* Signup form */}
         <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#aaa"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity style={styles.submitButtonContainer} onPress={handleSignup}>
              <Text style={styles.submitButton}>submit</Text>
            </TouchableOpacity>
         </View>
      </ImageBackground>
    </View>
  );
};

// Home Screen Component (Inventory, Login, and Signup buttons)
const HomeScreen = ({ navigation }) => (
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

// Stack Navigator Setup
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerTransparent: true, headerTintColor: 'white', headerTitle: ''}} />
      <Stack.Screen name="Signup" component={SignupScreen}  options={{ headerTransparent: true, headerTintColor: 'white', headerTitle: ''}} />
    </Stack.Navigator>
  );
}

// Main App Component with Navigation
const App = () => (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
);

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

  submitButtonContainer:{
    backgroundColor: 'white', 
    borderRadius: 30, 
    width: '40%',
    right: -105, 
    marginHorizontal: '30%'

  },

  submitButton: {
    color: '#332410',
    fontSize: 30,
    left: 20, 
    top: 0, 
    fontFamily: 'Farah',

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

  form: {
    top: -150,
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
});

export default App;
