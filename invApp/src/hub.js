import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles'; 

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#291d10'
      }}>
      <Text>Hub</Text>
    </View>
  );
};


export default HelloWorldApp;