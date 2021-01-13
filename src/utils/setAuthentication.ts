import axios from 'axios';

const setAuthentication = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return delete axios.defaults.headers.common.Authorization;
  }

  axios.defaults.headers.common.Authorization = token;
};

export default setAuthentication;
