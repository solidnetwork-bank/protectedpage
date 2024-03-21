import axios from 'axios';

const apiStage = process.env.REACT_APP_API_GATEWAY_STAGE;
const apiEndpoint = process.env.REACT_APP_API_GATEWAY_ENDPOINT;

export default axios.create({
  baseURL: `${apiEndpoint}/${apiStage}/`
});
