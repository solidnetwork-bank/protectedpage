import axios from 'axios';
import {
  CARD_API_ENDPOINT_URL
} from '../../investments/action/action-const';


export default axios.create({
  baseURL: `${CARD_API_ENDPOINT_URL}`
});
