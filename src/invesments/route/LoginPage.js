import React, { Component } from 'react';
import HeaderTitle from '../component/HeaderTitle';
import Logo from '../component/Logo';
import LoginForm from '../container/login-form-container';

class LoginPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="login-logo-svg" >
          <Logo />
        </div>
        <HeaderTitle
          label="Log In Solid Network"
          styleName="login-header"
        />
        <LoginForm

          styleName="form-signin"
        />
      </div>
    );
  }
}

export default LoginPage;
