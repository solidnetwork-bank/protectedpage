import {
  React,
  Component
} from 'react';
import '../static/styles/layout.css';
import MainContainer from './MainContainer';
import { Outlet } from "react-router-dom";


export default class Layout extends Component {

  /*
  <>
<NavBar />
<Outlet />
</>
*/

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

