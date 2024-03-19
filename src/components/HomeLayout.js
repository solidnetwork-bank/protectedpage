import {
  Component,
  React
} from 'react';

import '../static/styles/layout.css';
import MainContainer from './MainContainer';


export default class HomeLayout extends Component {

  render() {

    return (
      <div className='content-holder'>
        <MainContainer />
      </div>


    );

  }

}

