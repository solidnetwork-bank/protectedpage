import React, { Component } from 'react';
import Header from '../component/Header';

export default class MyInvestments extends Component {
  render() {
    const HeaderContent = () => {
      return (
        <div>
          <p>My Investments Header</p>
        </div>
      );
    }
    return (
      <div>

        <Header
          content={HeaderContent} />
        <p>My Investments Content</p>
      </div>
    );
  }
}
