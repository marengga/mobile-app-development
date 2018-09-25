import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class App extends Component {
  render() {
    function kali(a,b){
      return a*b;
    }

    return (
      <View>
        <Text style={{ marginTop: 100 }}>
          Hitungin 12 x 34 = {kali(12, 34)}
        </Text>
      </View>
    );
  }
}