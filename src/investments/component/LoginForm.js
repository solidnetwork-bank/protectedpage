import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
import EmailInput from '../container/email-input-container';
import PasswordInput from '../container/password-input-container';
import Button from './Button';

export const withNavigation = (Component) => {
  return props => <Component {...props} navigate={useNavigate()} />;
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleName: props.styleName
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.login(this.props).then(
      () => {
        this.props.goHome(this.props);
      }
    );
  }

  render() {
    return (
      <div>
        <form
          className={this.state.styleName}
          onSubmit={this.onSubmit}
        >
          <EmailInput
            label="Email"
            styleName="form-control"
            type="email"
          />
          <PasswordInput
            label="Password"
            styleName="form-control"
            type="password"
          />
          <Button
            label="Sign In"
            styleName="btn btn-lg btn-primary btn-block"
            type="submit" />
        </form>
      </div>
    );
  }
}

export default withNavigation(LoginForm);