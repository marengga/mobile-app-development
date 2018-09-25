import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Footer extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 30, backgroundColor: "yellow" }}>
          Ini adalah text dari Footer
        </Text>
        <Text style={{ fontSize: 30, backgroundColor: "blue", color: "#fff" }}>
          {this.props.content}
        </Text>
      </View>
    );
  }
}
