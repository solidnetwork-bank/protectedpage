import React, { Component } from 'react';
import Header from '../component/Header';
import Picture from '../component/Picture';

export default class MySettings extends Component {
  componentDidMount() {
    if (this.props.user.auth) {
      this.props.getUserImage(this.props);
    }
  }
  render() {
    const HeaderContent = () => {
      return (
        <div className="user-info">
          <Picture
            image={this.props.user.image}
            borderStyleName="user-pic-border"
            styleName="user-pic"
          />
          <div className="user-name">
            <span>{this.props.user.firstName} {this.props.user.lastName}</span>
          </div>
        </div>
      );
    }
    return (
      <div>

        <Header
          content={HeaderContent} />
        <div className="user-email">
          <span>{this.props.user.email}</span>
        </div>
      </div>
    );
  }
}
