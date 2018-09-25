import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <Text style={{
          fontSize:50,
          color:'red'
        }}>
          Darah itu merah!
        </Text>
        
        <Text style={{
          fontSize:40,
          fontStyle:'italic',
          fontWeight:'bold',
          textAlign:'center',
          color:'yellow',
          backgroundColor:'blue',
          marginVertical:20,
          marginHorizontal:15
        }}>
          Life is so colorful!
        </Text>
      </View>
    );
  }
}