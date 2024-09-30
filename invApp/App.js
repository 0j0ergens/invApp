// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/homescreen';  // Assuming you also have HomeScreen.js
import LoginScreen from './src/loginscreen';  // Importing LoginScreen from the new file
import SignupScreen from './src/signupscreen';  // Importing SignupScreen from the new file
import ProfileScreen from './src/profile'; 
import First from './src/firstTime'; 

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerTransparent: true, headerTintColor: 'white', headerTitle: '' }} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerTransparent: true, headerTintColor: 'white', headerTitle: '' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerTransparent: true, headerTintColor: 'white', headerTitle: '' }} />
      <Stack.Screen name = "First" component = {First} options = {{ headerTransparent: true, headerTintColor: 'white', headerTitle: '' }} />
   </Stack.Navigator>
  );
}

const App = () => (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
);

export default App;
