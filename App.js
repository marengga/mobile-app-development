import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class App extends Component {
  render() {
    const teman = ['Ali', 'Baba', 'Caca', 'Didu'];
    const listTeman = teman.map((teman, index) => {
      return <Text key={index}>- {teman}</Text>
    });

    return (
      <View style={{ marginTop: 100 }}>
        <Text>Saya punya {teman.length} teman, mereka adalah:</Text>
        {listTeman}
      </View>
    );
  }
}