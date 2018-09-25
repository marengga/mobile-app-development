import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', marginTop: 50 }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>

        <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginTop: 50, height: 200, backgroundColor: '#eee' }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>

        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', marginTop:50 }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ height: 100, backgroundColor: 'steelblue' }} />
        </View>
      </View>
    );
  }
}