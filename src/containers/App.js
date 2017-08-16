import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Login from './Login';

export default class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {connected: false};
  }

  componentDidMount() {
    /*ddpClient.connect((err, wasReconnect) => {
      let connected = true;
      if (err) connected = false;

      this.setState({ connected: connected });
    });*/
  }

  render() {
    let pageToDisplay;

    if (this.state.connected) {
      pageToDisplay = <Text>Connected</Text>;
    }
    else {
      pageToDisplay = <Login />;
    }

    return (
      <View style={{flex: 1}}>
        {pageToDisplay}
      </View>
    );
  }
}
