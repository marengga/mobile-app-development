import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <Text style={style.warnawarni}>
          Life is so colorful!
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  warnawarni: {
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'yellow',
    backgroundColor: 'blue',
    marginVertical: 20,
    marginHorizontal: 15
  }
})