import React from 'react';
import { Text, ImageBackground, StyleSheet, View } from 'react-native';


// Use require for local assets
const image = require('./assets/fruit2.png');

const App = () => (
/*
  const onPressLogin= () => {
    const [titleText, setTitleText] = useState("Bird's Nest");

    setTitleText("Bird's Nest [pressed]");
  };
*/

  <View style={styles.container}>
    <ImageBackground
      source={image} 
      resizeMode="cover"
      style={styles.image}
    >
      <Text style = {styles.title}> Inventory. </Text>
      <View style = {styles.underContainer}> 
        <Text style = {styles.under}> Login </Text>
        <Text style = {styles.under}> SignUp </Text>
      </View>
     
    </ImageBackground>
  </View>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 90, 
    color: 'white', 
    top: '10%',
    fontFamily: 'Farah'
  },

  underContainer: {
    flexDirection: 'row', 
    top: 80,
  }, 

  under: {
    color: 'red', 
    fontSize: 40, 
    
    marginHorizontal: 30, 
    left: -27, 
    fontFamily: 'Farah'
  }, 

  image: {
    flex: 1, 
    justifyContent: 'left', 
    
  }
});

export default App;
