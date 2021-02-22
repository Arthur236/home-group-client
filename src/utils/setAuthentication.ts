import axios from 'axios';

const setAuthentication = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return delete axios.defaults.headers.common.Authorization;
  }

  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default setAuthentication;
