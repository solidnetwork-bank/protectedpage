import React, { useEffect } from 'react';
import {
  Outlet,
  useNavigate
} from "react-router-dom";
import NavBar from '../container/nav-bar-container';
import store from '../reducer/store-reducer';

export const withNavigation = (Component) => {
  return props => <Component {...props} navigate={useNavigate()} />;
}

function RequireAuthFunct(props) {

  useEffect(() => {
    console.log("store.getState().user=",store.getState().user);
    console.log("RequireAuthFunct=", props);

    props.requiredAuth(props);
  }, [props]);

  return (
    <>
      <Outlet />
      <NavBar />
    </>

  );
}

export default withNavigation(RequireAuthFunct);