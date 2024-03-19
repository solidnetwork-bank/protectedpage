import { connect } from 'react-redux';
import { logout } from '../action/user-action';
import NavBar from '../component/NavBar';

const mapStateToProps = (store) => {
  return {
    user: store.user
  };
}

const matchDispatchToProps = (dispatch) => {
  return {
    logout: (state) => dispatch(logout(state))
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(NavBar);
