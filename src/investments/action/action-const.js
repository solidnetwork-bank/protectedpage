/* API GATEWAY */
const API_STAGE = process.env.REACT_APP_API_STAGE;
const SECURE_API_ENDPOINT = process.env.REACT_APP_SECURE_API_ENDPOINT;
const ACCOUNT_API_ENDPOINT = process.env.REACT_APP_ACCOUNT_API_ENDPOINT;
const CARD_API_ENDPOINT = process.env.REACT_APP_CARD_API_ENDPOINT;

const SECURE_API_ENDPOINT_URL = `${SECURE_API_ENDPOINT}/${API_STAGE}`;
export const ACCOUNT_API_ENDPOINT_URL = `${ACCOUNT_API_ENDPOINT}/${API_STAGE}`;
export const CARD_API_ENDPOINT_URL = `${CARD_API_ENDPOINT}/${API_STAGE}`;

/* USER */
export const AUTH_TOKEN_LOCAL_NAME = '__vrfeqFpHOe__';
export const AUTH_HEADER = 'Authorization';
export const API_LOGIN_PATH = `${SECURE_API_ENDPOINT_URL}/auth/signin`;
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const SET_USER = 'SET_USER';
export const USER_IMAGE_PATH = `${SECURE_API_ENDPOINT_URL}/profile`;
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
