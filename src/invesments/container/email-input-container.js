import { connect } from 'react-redux';
import { setUserEmail } from '../action/user-action';
import Input from '../component/Input';

const mapStateToProps = (store) => {
  return {
    user: store.user
  };
}

const matchDispatchToProps = (dispatch) => {
  return {
    setUserEmail: (email) => dispatch(setUserEmail(email))
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Input);
