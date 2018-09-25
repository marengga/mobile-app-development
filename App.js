import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop:100}}>
        <Header />

        <Text>Text di App.js</Text>
        <Text>Ini juga</Text>
        <Text>Ini juga sama</Text>

        <Footer />
      </View>
    );
  }
}