import React, { Component } from 'react';
import Header from '../component/Header';

export default class Search extends Component {
  render() {
    const HeaderContent = () => {
      return (
        <div>
          <p>Search Header</p>
        </div>
      );
    }
    return (
      <div>

        <Header
          content={HeaderContent} />
        <p>Search Content</p>
      </div>
    );
  }
}
