import {
  React,
  Component
} from 'react';
import Home from '../pages/Home';
import Proposal from '../pages/Proposal';
import VirtualCreditCard from '../pages/VirtualCreditCard';
import Statement from '../pages/Statement'
import '../static/styles/main-section.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {
  HOME_HEADING,
  PROPOSAL_HEADING,
  EDITORIAL_HEADING,
  VIRTUAL_CREDIT_CARD_HEADING,
  STATEMENT_HEADING,
  HOME_PATH,
  PROPOSAL_PATH,
  EDITORIAL_PATH,
  VIRTUAL_CREDIT_CARD_PATH,
  STATEMENT_PATH,
  ALL_PATH
} from '../model/store-const';
import store from '../model/store-no-redux';


export default class MainSection extends Component {

  render() {

    return (

      <section className='main-section'>

       

      </section>

    );

  }

}
