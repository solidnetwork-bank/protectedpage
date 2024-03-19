
import React, { Component } from 'react';
import { Outlet } from "react-router-dom";
import AppPage from '../investments/route/AppPage';


global.jQuery = require('jquery');
global.Tether = require('tether');
global.Bootstrap = require('bootstrap');

require('bootstrap/dist/css/bootstrap.min.css');
require('../investments/style/signin.css');
require('../investments/style/navbar.css');
require('../investments/style/my-settings.css');
require('../investments/style/my-rental-roi.css');
require('../investments/style/header.css');

export default class InvestmentLayout extends Component {

  render() {
    return (

      <AppPage>
        <Outlet />
      </AppPage>
    );
  }
}
