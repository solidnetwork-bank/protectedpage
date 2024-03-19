import { connect } from 'react-redux';
import { requiredAuth } from '../action/user-action';
import RequireAuthFunct from '../route/RequireAuthFunct';

export const mapStateToProps = (store) => {
  return {
    user: store.user
  };
}

const matchDispatchToProps = (dispatch) => {
  return {
    requiredAuth: (state) => dispatch(requiredAuth(state))
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(RequireAuthFunct);