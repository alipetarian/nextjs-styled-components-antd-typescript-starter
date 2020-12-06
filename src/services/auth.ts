import axios from 'axios';
import { User } from 'types/user';

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
};

export const registerUser = (data : User) => {
  const body = JSON.stringify(data);
  return axios.post('/api/auth/register', body, axiosConfig);
};
