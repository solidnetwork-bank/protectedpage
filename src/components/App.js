import { jwtDecode } from 'jwt-decode';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    AUTH_TOKEN_LOCAL_NAME,
    INVESTMENT_NAV_PATH,
    LOGIN_NAV_PATH,
    SEARCH_NAV_PATH,
    SETTINGS_NAV_PATH
} from '../investments/action/action-const';
import {
    setAuthToken,
    setUser
} from '../investments/action/user-action';
import MyRentalROI from '../investments/container/my-rental-roi-container';
import MySettings from '../investments/container/my-settings-container';
import store from '../investments/reducer/store-reducer';
import InvestmentLayout from './InvestmentLayout';
import LoginPage from '../investments/route/LoginPage';
import MyInvestments from '../investments/route/MyInvestments';
import Search from '../investments/route/Search';
import {
    ALL_PATH,
    EDITORIAL_HEADING,
    EDITORIAL_PATH,
    HOME_HEADING,
    HOME_PATH,
    PROPOSAL_HEADING,
    PROPOSAL_PATH,
    STATEMENT_HEADING,
    STATEMENT_PATH,
    VIRTUAL_CREDIT_CARD_HEADING,
    VIRTUAL_CREDIT_CARD_PATH
} from '../model/store-const';
import storeNoRedux from '../model/store-no-redux';
import Home from '../pages/Home';
import Proposal from '../pages/Proposal';
import Statement from '../pages/Statement';
import VirtualCreditCard from '../pages/VirtualCreditCard';
import '../static/styles/main-section.css';
import HomeLayout from './HomeLayout';

export default function App() {


    useEffect(() => {
        let token = localStorage.getItem(AUTH_TOKEN_LOCAL_NAME);
        if (token) {
            setAuthToken(token);
            store.dispatch(setUser(jwtDecode(token).user));

        }

        console.log("APP=", store.getState());
    }, []);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route exact path={HOME_PATH} element={<Home heading={HOME_HEADING} />} />
                        <Route exact path={PROPOSAL_PATH} element={
                            <Proposal
                                heading={PROPOSAL_HEADING}
                                data={storeNoRedux.proposals}
                                isOrder={true} />}
                        />
                        <Route exact path={EDITORIAL_PATH} element={
                            <Proposal
                                heading={EDITORIAL_HEADING}
                                data={storeNoRedux.editorial}
                                isOrder={false} />}
                        />
                        <Route exact path={VIRTUAL_CREDIT_CARD_PATH} element={<VirtualCreditCard heading={VIRTUAL_CREDIT_CARD_HEADING} />} />
                        <Route exact path={STATEMENT_PATH} element={<Statement heading={STATEMENT_HEADING} />} />
                        <Route path={ALL_PATH} element={<Home heading={HOME_HEADING} />} />
                    </Route>

                    <Route path="/investment" element={<InvestmentLayout />}>
                        <Route exact path="roi" element={<MyRentalROI />} />
                        <Route exact path={SETTINGS_NAV_PATH} element={<MySettings />} />
                        <Route exact path={INVESTMENT_NAV_PATH} element={<MyInvestments />} />
                        <Route exact path={SEARCH_NAV_PATH} element={<Search />} />
                    </Route>
                    <Route exact path={"/" + LOGIN_NAV_PATH} element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}








