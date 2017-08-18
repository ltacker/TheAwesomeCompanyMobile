import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Meteor from 'react-native-meteor';
import Login from './Login';
import LogoutButton from '../components/LogoutButton';

const SERVER_URL = 'ws://localhost:3000/websocket';


export default class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {connected: false};
  }

  componentWillMount() {
      Meteor.connect(SERVER_URL);
  }

  loginUser() {
      this.forceUpdate();
  }

  logoutUser() {
      this.forceUpdate();
  }

  render() {
    let pageToDisplay;

    var u = Meteor.user()


    if (!u) {
        pageToDisplay = <Login onLogin={this.loginUser.bind(this)} meteor={Meteor} />;
    }
    else {
        pageToDisplay =
          <View style={{justifyContent: 'center',alignItems: 'center'}}>
            <Text>{u.username}</Text>
            <LogoutButton onLogout={this.logoutUser.bind(this)} meteor={Meteor} />
          </View>;
    }

    return (
      <View style={styles.container}>
        {pageToDisplay}
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
