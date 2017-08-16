import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/palm.png')} style={{width: 60, height: 60}} />
        <Image source={require('../images/title.png')} style={{width: 270, height: 32}} />
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
