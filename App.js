import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nama: "Vincent",
      usia: 15
    };
  }

  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <Header />

        <Text style={{fontSize:50}}>Halo {this.state.nama}!</Text>
        <Text style={{fontSize:50}}>Usia kamu saat ini {this.state.usia} tahun ya?</Text>

        <Footer />
      </View>
    );
  }
}
