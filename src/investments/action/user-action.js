import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import {
  API_LOGIN_PATH,
  AUTH_HEADER,
  AUTH_TOKEN_LOCAL_NAME,
  LOGIN_NAV_PATH,
  RENTAL_NAV_PATH,
  SET_USER,
  SET_USER_EMAIL,
  SET_USER_IMAGE,
  SET_USER_PASSWORD,
  USER_IMAGE_PATH
} from './action-const';

export const setUserEmail = (email) => {
  return {
    type: SET_USER_EMAIL,
    payload: email
  };
}

export const setUserPassword = (password) => {
  return {
    type: SET_USER_PASSWORD,
    payload: password
  };
}

export const setUser = (user) => {
  console.log("setUser=", user);
  return {
    type: SET_USER,
    payload: user
  };
}

export const setUserImage = (image) => {
  return {
    type: SET_USER_IMAGE,
    payload: image
  };
}

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common[AUTH_HEADER] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common[AUTH_HEADER];
  }
}

export const logout = (state) => {
  return dispatch => {
    console.log("logout=", state);
    localStorage.removeItem(AUTH_TOKEN_LOCAL_NAME);
    setAuthToken(false);
    dispatch(setUser({}));
    state.navigate(/*LOGIN_NAV_PATH*/ "/");
  }
}

export const login = (state) => {
  let user = {
    email: state.user.email,
    password: state.user.password
  };
  return dispatch => {
    return axios.post(API_LOGIN_PATH, user)
      .then(
        (res) => {
          const token = res.data.token;
          localStorage.setItem(AUTH_TOKEN_LOCAL_NAME, token);
          setAuthToken(token);
          let userDecode = jwtDecode(token).user;
          console.log("userDecode=", userDecode);
          dispatch(setUser(userDecode));
        },
        (err) => {
          localStorage.removeItem(AUTH_TOKEN_LOCAL_NAME);
          setAuthToken(false);
        }
      );
  };
}

export const goHome = (state) => {
  return dispatch => {
    console.log("goHome=", state);
    if (state.user.auth) {
      state.navigate(RENTAL_NAV_PATH+"investment/roi");
    }
  };
}

export const requiredAuth = (state) => {
  return dispatch => {
    console.log("requiredAuth=", state);
    if (!state.user.auth) {
      state.navigate("/"+LOGIN_NAV_PATH);
    }
  };
}

export const getUserImage = (state) => {
  return dispatch => {
    console.log("getUserImage=", getUserImage);
    return axios.get(USER_IMAGE_PATH)
      .then(
        (res) => {
          dispatch(setUserImage(res.data.image));
        },
        (err) => {
          if (err.response.data.message === '101') {
            dispatch(logout(state));
          }
        }
      );
  };
}

