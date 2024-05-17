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
import LoginPage from '../investments/route/LoginPage';
import MyInvestments from '../investments/route/MyInvestments';
import Search from '../investments/route/Search';
import {
    ALL_PATH,
    STATEMENT_HEADING,
    STATEMENT_PATH,
    VIRTUAL_CREDIT_CARD_HEADING,
    VIRTUAL_CREDIT_CARD_PATH,
    TRANSFER_PATH,
    TRANSFER_HEADING
} from '../model/store-const';
import Statement from '../pages/Statement';
import VirtualCreditCard from '../pages/VirtualCreditCard';
import '../static/styles/main-section.css';
import InvestmentLayout from './InvestmentLayout';
import Transfer from '../pages/Transfer';

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
                    <Route element={<InvestmentLayout />}>
                        <Route exact path="roi" element={<MyRentalROI />} />
                        <Route exact path={SETTINGS_NAV_PATH} element={<MySettings />} />
                        <Route exact path={INVESTMENT_NAV_PATH} element={<MyInvestments />} />
                        <Route exact path={SEARCH_NAV_PATH} element={<Search />} />
                        <Route exact path={VIRTUAL_CREDIT_CARD_PATH} element={<VirtualCreditCard heading={VIRTUAL_CREDIT_CARD_HEADING} />} />
                        <Route exact path={STATEMENT_PATH} element={<Statement heading={STATEMENT_HEADING} />} />
                        <Route exact path={TRANSFER_PATH} element={<Transfer heading={TRANSFER_HEADING} />} />
                        <Route path={ALL_PATH} element={<MyRentalROI />} />
                    </Route>
                    <Route exact path={"/" + LOGIN_NAV_PATH} element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}








