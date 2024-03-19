import {
  Component,
  React
} from 'react';
import { Outlet } from "react-router-dom";
import '../static/styles/layout.css';
import MainContainer from './MainContainer';


export default class HomeLayout extends Component {

  render() {

    return (
      <div className='content-holder'>
        <MainContainer >
          <Outlet />
        </MainContainer >
      </div>


    );

  }

}

