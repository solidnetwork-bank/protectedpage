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
import store from '../model/store';


export default class MainSection extends Component {

  render() {

    return (

      <section className='main-section'>

        <BrowserRouter>
          <Routes>
            <Route exact path={HOME_PATH} element={<Home heading={HOME_HEADING} />} />
            <Route exact path={PROPOSAL_PATH} element={
              <Proposal
                heading={PROPOSAL_HEADING}
                data={store.proposals}
                isOrder={true} />}
            />
            <Route exact path={EDITORIAL_PATH} element={
              <Proposal
                heading={EDITORIAL_HEADING}
                data={store.editorial}
                isOrder={false} />}
            />
            <Route exact path={VIRTUAL_CREDIT_CARD_PATH} element={<VirtualCreditCard heading={VIRTUAL_CREDIT_CARD_HEADING} />} />
            <Route exact path={STATEMENT_PATH} element={<Statement heading={STATEMENT_HEADING} />} />
            <Route path={ALL_PATH} element={<Home heading={HOME_HEADING} />} />
          </Routes>
        </BrowserRouter>

      </section>

    );

  }

}
