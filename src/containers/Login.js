import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TextInput, Button } from 'react-native';

import Meteor from 'react-native-meteor';

const SERVER_URL = 'ws://localhost:3000/websocket';


export default class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: '',
      };
      this.onLogin = this.onLogin.bind(this);
  }

  static defaultProps = {
  }

  onLogin(e) {
      var self = this;
      e.preventDefault();


  }

  componentWillMount() {
      Meteor.connect(SERVER_URL);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/palm.png')} style={{width: 60, height: 60}} />
        <Image source={require('../images/title.png')} style={{width: 270, height: 32}} />
        <View style={{margin:30}} />
        <TextInput
            placeholder='Username'
            style={{width: 220}}
            onChangeText={(text) => this.setState({username:text})}
            value={this.state.username}
        />
        <TextInput
            placeholder='Password'
            style={{width: 220}}
            secureTextEntry={true}
            onChangeText={(text) => this.setState({password:text})}
            value={this.state.password}
        />
        <View style={{margin:20}} />
        <Button
            onPress={this.onLogin}
            title="Submit"
            color="#2A837C"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(238, 197, 122)',
    }
});
