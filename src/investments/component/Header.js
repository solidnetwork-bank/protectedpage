import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


export default function Header(props) {

  const location = useLocation();
  const { pathname } = location;

  const [activeTabClassName, setActiveTabClassName] = useState('');
  const [label, setLabel] = useState('');


  useEffect(() => {
    let headerTitle;
    let iconClass;
    switch (pathname) {
      case "/roi":
        headerTitle = "ROI";
        iconClass = "rental-icon active";
        break;
      case "/search":
        headerTitle = "Search";
        iconClass = "search-icon active";
        break;
      case "/invest":
        headerTitle = "Investment";
        iconClass = "invest-icon active";
        break;
      case "/settings":
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

            if ("/search" === pathname) {
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
