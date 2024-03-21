/* API GATEWAY */
export const API_GATEWAY_ENDPOINT = process.env.REACT_APP_API_GATEWAY_ENDPOINT;
export const API_GATEWAY_STAGE = process.env.REACT_APP_API_GATEWAY_STAGE;
export const API_ROOT_PATH = `${API_GATEWAY_ENDPOINT}/${API_GATEWAY_STAGE}`;

/* USER */
export const AUTH_TOKEN_LOCAL_NAME = '__vrfeqFpHOe__';
export const AUTH_HEADER = 'Authorization';
export const API_LOGIN_PATH = `${API_ROOT_PATH}/auth/signin`;
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const SET_USER = 'SET_USER';
export const USER_IMAGE_PATH = `${API_ROOT_PATH}/profile`;
export const SET_USER_IMAGE = 'SET_USER_IMAGE';

/* NAV PATH */
export const RENTAL_NAV_PATH = '/';
export const SEARCH_NAV_PATH = 'search';
export const INVESTMENT_NAV_PATH = 'invest';
export const SETTINGS_NAV_PATH = 'settings';
export const LOGOUT_NAV_PATH = 'logout';
export const LOGIN_NAV_PATH = 'login-2';
export const BASENAME_PATH = 'investment';

/* RENTAL */
export const SET_RENTAL_INCOME = 'SET_RENTAL_INCOME';
export const SET_RENTAL_ADDRESS = 'SET_RENTAL_ADDRESS';
export const SET_RENTAL_VALUE = 'SET_RENTAL_VALUE';
