import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, TextInput, Button } from 'react-native';


export default class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: '',
          loginErrMsg: '',
      };
      this.onLoginPress = this.onLoginPress.bind(this);
  }

  static defaultProps = {
  }

  onLoginPress(e) {
      var self = this;
      e.preventDefault();

      self.props.meteor.loginWithPassword(this.state.username, this.state.password, function(err) {
          if (err) {
              self.setState({loginErrMsg: err.reason});
          } else {
              self.props.onLogin();
          }
      });
  }


  render() {
    return (
      <View style={{justifyContent: 'center',alignItems: 'center'}} >
        <Image source={require('../images/palm.png')} style={{width: 60, height: 60}} />
        <Image source={require('../images/title.png')} style={{width: 270, height: 32}} />
        <View style={{margin:30}} />
        <TextInput
            placeholder='Username'
            style={{width: 220}}
            onChangeText={(text) => this.setState({username:text})}
            value={this.state.username}
        />
        <View style={{margin:10}} />
        <TextInput
            placeholder='Password'
            style={{width: 220}}
            secureTextEntry={true}
            onChangeText={(text) => this.setState({password:text})}
            value={this.state.password}
        />
        <View style={{margin:20}} />
        <Button
            onPress={this.onLoginPress}
            title="Submit"
            color="#2A837C"
        />
        <View style={{margin:20}} />
        <Text>{this.state.loginErrMsg}</Text>
      </View>
    );
  }
}
