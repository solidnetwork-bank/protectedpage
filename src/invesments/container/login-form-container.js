import { connect } from 'react-redux';
import {
  goHome,
  login
} from '../action/user-action';
import LoginForm from '../component/LoginForm';

const mapStateToProps = (store) => {
  return {
    user: store.user
  };
}

const matchDispatchToProps = (dispatch) => {
  return {
    login: (state) => dispatch(login(state)),
    goHome: (state) => dispatch(goHome(state)),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);
