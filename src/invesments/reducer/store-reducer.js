import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import rentalReducer from './rental-reducer';
import userReducer from './user-reducer';

const reducers = combineReducers({
  user: userReducer,
  rental: rentalReducer
});

const middleware = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,
  composeEnhancers(middleware)
);

export default store;
