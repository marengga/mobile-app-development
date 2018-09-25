import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <Text style={style.a}>
          Life is so colorful!
        </Text>
        <Text style={style.b}>
          Life is so colorful!
        </Text>
        <Text style={[style.a, style.b]}>
          Life is so colorful!
        </Text>
        <Text style={[style.b, style.a]}>
          Life is so colorful!
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  a: {
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'yellow',
    backgroundColor: 'blue',
    marginVertical: 20,
    marginHorizontal: 15
  },
  b: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
    backgroundColor: 'green',
    marginVertical: 20,
    marginHorizontal: 15
  }
})