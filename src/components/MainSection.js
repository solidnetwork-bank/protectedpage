import {
  Component,
  React
} from 'react';
import { Outlet } from "react-router-dom";
import '../static/styles/main-section.css';


export default class MainSection extends Component {

  render() {

    return (

      <section className='main-section'>

        <Outlet />

      </section>

    );

  }

}
