import { connect } from 'react-redux';
import {
  getUserImage
} from '../action/user-action';
import MySettings from '../route/MySettings';

const mapStateToProps = (store) => {
  return {
    user: store.user
  };
}

const matchDispatchToProps = (dispatch) => {
  return {
    getUserImage: (state) => dispatch(getUserImage(state))
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(MySettings);
