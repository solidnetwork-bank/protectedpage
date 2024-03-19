import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  INVESTMENT_NAV_PATH,
  RENTAL_NAV_PATH,
  SEARCH_NAV_PATH,
  SETTINGS_NAV_PATH
} from '../action/action-const';


export default function Header(props) {

  const location = useLocation();
  const { pathname } = location;

  const [activeTabClassName, setActiveTabClassName] = useState('');
  const [label, setLabel] = useState('');


  useEffect(() => {
    let headerTitle;
    let iconClass;
    switch (pathname) {
      case RENTAL_NAV_PATH:
        headerTitle = "ROI";
        iconClass = "rental-icon active";
        break;
      case SEARCH_NAV_PATH:
        headerTitle = "Search";
        iconClass = "search-icon active";
        break;
      case INVESTMENT_NAV_PATH:
        headerTitle = "Investment";
        iconClass = "invest-icon active";
        break;
      case SETTINGS_NAV_PATH:
        headerTitle = "Settings";
        iconClass = "settings-icon active";
        break;
      default:
        headerTitle = "";
        iconClass = "";
    }

    setActiveTabClassName(iconClass);
    setLabel(headerTitle);

    console.log("pathname={}, iconClass={}, headerTitle={}", pathname, iconClass, headerTitle);

  }, [pathname]);





  return (

    <div className="header-indicator">
      <div className={activeTabClassName}>
        {
          (() => {

            if (SEARCH_NAV_PATH === pathname) {
              return (
                <form className="header-search-form">
                  <input type="text" maxLength="24" size="24" placeholder={label} />
                </form>
              );
            } else {
              return (
                <div className="hearder-inicator-label">
                  <span>{label}</span>
                </div>
              );
            }

          })()

        }
      </div>
      <div className="header-summary">
        {<props.content />}
      </div>
    </div>
  );

}
