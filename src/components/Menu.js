import React, { useState } from "react";
import "../static/styles/menu.css";
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
    STATEMENT_PATH
} from '../model/store-const';

export default function Menu() {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <nav>
            <div className={isActive ? "menu-icon-container" : "menu-icon-change"}
                onClick={handleToggle}>
                <div className="menu-icon-bar1"></div>
                <div className="menu-icon-bar2"></div>
                <div className="menu-icon-bar3"></div>
            </div>

            <div className={isActive ? "menu-close" : "menu-open"}>
                <span className="cross-button" onClick={handleToggle}>X</span>
                <a className="menu-item" href={HOME_PATH}>{HOME_HEADING}</a>
                <a className="menu-item" href={PROPOSAL_PATH}>{PROPOSAL_HEADING}</a>
                <a className="menu-item" href={EDITORIAL_PATH}>{EDITORIAL_HEADING}</a>
                <a className="menu-item" href={VIRTUAL_CREDIT_CARD_PATH}>{VIRTUAL_CREDIT_CARD_HEADING}</a>
                <a className="menu-item" href={STATEMENT_PATH}>{STATEMENT_HEADING}</a>
            </div>
        </nav>
    );
}
