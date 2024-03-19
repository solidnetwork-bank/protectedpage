import React, { useEffect } from 'react';
import {
  Outlet,
  useNavigate
} from "react-router-dom";
import NavBar from '../container/nav-bar-container';

export const withNavigation = (Component) => {
  return props => <Component {...props} navigate={useNavigate()} />;
}

function RequireAuthFunct(props) {

  useEffect(() => {
    console.log("RequireAuthFunct=", props);

    props.requiredAuth(props);
  }, [props]);

  return (
   
      <NavBar />
     
  );
}

export default withNavigation(RequireAuthFunct);