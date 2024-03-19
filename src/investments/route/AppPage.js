import React, { Component } from 'react';
import RequireAuthFunct from '../container/require-auth-funct-container';

export default class AppPage extends Component {
  render() {
    return (
      <RequireAuthFunct />
    );
  }
}

