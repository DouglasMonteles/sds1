import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sds1-monteles.herokuapp.com',
});

export default api;