import axios from 'axios';

const apiStage = process.env.REACT_APP_API_GATEWAY_STAGE;

export default axios.create({
  baseURL: `https://api.solidnetwork.xyz/${apiStage}/`
});
