import { jwtDecode } from 'jwt-decode';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AUTH_TOKEN_LOCAL_NAME } from '../action/action-const';
import {
  setAuthToken,
  setUser
} from '../action/user-action';
import store from '../reducer/store-reducer';
import AppPage from './AppPage';

global.jQuery = require('jquery');
global.Tether = require('tether');
global.Bootstrap = require('bootstrap');

require('bootstrap/dist/css/bootstrap.min.css');
require('../style/signin.css');
require('../style/navbar.css');
require('../style/my-settings.css');
require('../style/my-rental-roi.css');
require('../style/header.css');

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    let token = localStorage.getItem(AUTH_TOKEN_LOCAL_NAME);
    if (token) {
      setAuthToken(token);
      store.dispatch(setUser(jwtDecode(token).user));

    }

    console.log("IndexPage=", store.getState());

  }
  render() {
    return (
      <Provider store={store}>
        <AppPage />
      </Provider>
    );
  }
}
