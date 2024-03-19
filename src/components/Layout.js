import {
  React,
  Component
} from 'react';
import '../static/styles/layout.css';
import MainContainer from './MainContainer';


export default class Layout extends Component {

  render() {

    return (
      <div className='content-holder'>
        <MainContainer />
      </div>
    );

  }

}

