import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.kalimat = "Kalimat dari constructor!";
  }

  render() {  
    return (
      <View>
        <Text style={{ marginTop: 100 }}>
          {this.kalimat}
        </Text>
      </View>
    );
  }
}