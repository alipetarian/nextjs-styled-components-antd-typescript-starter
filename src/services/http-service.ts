import axios from 'axios';

export const setAuthorization = (token: string) => {
  console.log('INSIDE SET setAuthorization', token);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeAuthorization = () => {
  console.log('INSIDE REMOVE --- REMOVE Authorization');
  delete axios.defaults.headers.common.Authorization;
};

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
