import React, { Component } from 'react';
import { Text, View } from 'react-native';

var kalimatlama = "Halo lama!";
const kalimat1 = "Halo Dunia 1!";
let kalimat2 = "Halo Dunia 2!"
export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{ marginTop: 100 }}>
          {kalimatlama}
        </Text>
        <Text style={{ marginTop: 100 }}>
          {kalimat1}
        </Text>
        <Text style={{ marginTop: 100 }}>
          {kalimat2}
        </Text>
      </View>
    );
  }
}