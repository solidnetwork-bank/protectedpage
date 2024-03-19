import { connect } from 'react-redux';
import {
  setRentalAddress,
  setRentalIncome,
  setRentalValue
} from '../action/rental-action';
import MyRentalROI from '../route/MyRentalROI';

const mapStateToProps = (store) => {
  return {
    rental: store.rental,
    user: store.user
  };
}

const matchDispatchToProps = (dispatch) => {
  return {
    setRentalAddress: (address) => dispatch(setRentalAddress(address)),
    setRentalIncome: (income) => dispatch(setRentalIncome(income)),
    setRentalValue: (value) => dispatch(setRentalValue(value))
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(MyRentalROI);
