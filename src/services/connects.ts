import axios from 'axios';
import { Connect } from 'types/connect';

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
};

export const createConnect = (data : Connect) => {
  const body = JSON.stringify(data);

  return axios.post('/graphql', body, axiosConfig);
};
