import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import {
  BASENAME_PATH,
  INVESTMENT_NAV_PATH,
  LOGIN_NAV_PATH,
  RENTAL_NAV_PATH,
  SEARCH_NAV_PATH,
  SETTINGS_NAV_PATH
} from '../action/action-const';
import MyRentalROI from '../container/my-rental-roi-container';
import MySettings from '../container/my-settings-container';
import RequireAuthFunct from '../container/require-auth-funct-container';
import LoginPage from './LoginPage';
import MyInvestments from './MyInvestments';
import Search from './Search';

export default class AppPage extends Component {
  render() {
    return (
      <RequireAuthFunct />
    );
  }
}

 