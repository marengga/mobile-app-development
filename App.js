import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nama: "Vincent",
      usia: 15,
      data: "State yang akan jadi Props"
    };
  }

  render() {
    setTimeout(() => {
      this.setState({
        usia: this.state.usia + 1
      });
    }, 3000);

    return (
      <View style={{ marginTop: 100 }}>
        <Header content="Props dari App.js" />

        <Text style={{ fontSize: 50 }}>Halo {this.state.nama}!</Text>
        <Text style={{ fontSize: 50 }}>
          Usia kamu saat ini {this.state.usia} tahun ya?
        </Text>

        <Footer content={this.state.data} />
      </View>
    );
  }

  componentWillMount() {
    console.log("will mount");
  }

  componentDidMount() {
    console.log("did mount");
  }

  componentWillUpdate() {
    console.log("will update");
  }

  componentDidUpdate() {
    console.log("did update");
  }
}
