import { API } from '../api';

const setAuthToken = (token: string | boolean) => {
  if (token) {
    API.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete API.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
