import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class App extends Component {
  kali(a,b){
    return a*b;
  }
  render() {  
    return (
      <View>
        <Text style={{ marginTop: 100 }}>
          Hitung 15 x 20 = {this.kali(15,20)}
        </Text>
      </View>
    );
  }
}