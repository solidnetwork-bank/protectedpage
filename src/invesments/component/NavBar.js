import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  INVESTMENT_NAV_PATH,
  LOGOUT_NAV_PATH,
  RENTAL_NAV_PATH,
  SEARCH_NAV_PATH,
  SETTINGS_NAV_PATH
} from '../action/action-const';


function NavBar(props) {

  const [activeTabClassName, setActiveTabClassName] = useState('rental-icon');

  const navigate = useNavigate();

  const logout = e => {
    e.preventDefault();

    props.logout({ ...props, navigate: navigate });

  }


  const onClick = e => {
    console.log("onClick=e.target.className=", e.target.className);
    console.log("activeTabClassName=", activeTabClassName);


    setActiveTabClassName(e.target.className);

    console.log("updated activeTabClassName=", activeTabClassName);


  };


  return (
    <div className="fixed-bottom nav-bar-icon">
      <nav className="navbar">
        <div className="row">
          <div className="col">
            <Link onClick={onClick} to={RENTAL_NAV_PATH}>
              <div className={
                (activeTabClassName === 'rental-icon')
                  ? 'rental-icon active' : 'rental-icon'
              } ></div>
            </Link>
          </div>
          <div className="col">
            <Link onClick={onClick} to={SEARCH_NAV_PATH}>
              <div className={
                (activeTabClassName === 'search-icon')
                  ? 'search-icon active' : 'search-icon'
              } ></div>
            </Link>
          </div>
          <div className="col">
            <Link onClick={onClick} to={INVESTMENT_NAV_PATH}>
              <div className={
                (activeTabClassName === 'invest-icon')
                  ? 'invest-icon active' : 'invest-icon'
              } ></div>
            </Link>
          </div>
          <div className="col">
            <Link onClick={onClick} to={SETTINGS_NAV_PATH}>
              <div className={
                (activeTabClassName === 'settings-icon')
                  ? 'settings-icon active' : 'settings-icon'
              } ></div>
            </Link>
          </div>
          <div className="col">
            <Link onClick={logout} to={LOGOUT_NAV_PATH}>
              <div className="exit-icon"></div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;