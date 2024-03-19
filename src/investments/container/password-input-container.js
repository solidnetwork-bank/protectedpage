import { connect } from 'react-redux';
import { setUserPassword } from '../action/user-action';
import Input from '../component/Input';

const mapStateToProps = (store) => {
  return {
    user: store.user
  };
}

const matchDispatchToProps = (dispatch) => {
  return {
    setUserPassword: (password) => dispatch(setUserPassword(password))
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Input);
