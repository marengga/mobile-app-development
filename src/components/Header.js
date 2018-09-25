import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 30, backgroundColor: "pink" }}>
          Ini adalah text dari Header
        </Text>
        <Text style={{ fontSize: 30, backgroundColor: "blue", color: "#fff" }}>
          {this.props.content}
        </Text>
      </View>
    );
  }
}
