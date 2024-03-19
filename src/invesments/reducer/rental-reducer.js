import {
  SET_RENTAL_ADDRESS,
  SET_RENTAL_INCOME,
  SET_RENTAL_VALUE
} from '../action/action-const';

const initialState = {
  income: '1,360.00',
  address: '1 Dr. Long Way St.',
  value: '210,000.00',
  tax: '4,600.00',
  insurance: '20.00',
  hoa: '400.00',
  vacancy: '27.00',
  repairs: '40.00',
  maintenance: '100.00',
  mortgage: '825.48',
  expenses: '338.82'
};

export default function rentalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RENTAL_INCOME:
      state = { ...state, income: action.payload };
      break;

    case SET_RENTAL_ADDRESS:
      state = { ...state, address: action.payload };
      break;

    case SET_RENTAL_VALUE:
      state = { ...state, value: action.payload };
      break;

    default:
      state = { ...state };
  }
  return state;
}
