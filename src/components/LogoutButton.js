import React, { Component } from 'react';
import { Button } from 'react-native';


var noop = function() {};

export default class LogoutButton extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    static defaultProps = {
        onLogout: noop
    }

    handleLogout(e) {
        var self = this;
        e.preventDefault();
        self.props.meteor.logout(function(err) {
            if (err) {
            } else {
                self.props.onLogout();
            }
        });
    }

    render() {
      return (
          <Button
              onPress={this.handleLogout}
              title="Logout"
              color="#2A837C"
          />
        );
      }
}
