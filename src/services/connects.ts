import { Connect } from 'types/connect';
import httpService from './http-service';

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
};

const INSERT_CONNECTS_ONE = `
  mutation (
    $company_name: String!,
    $email: String!, 
    $first_name: String!, 
    $last_name: String!, 
    $phone_number: String!,
    $frequency: String!
    $notes_about_them: String!
    $notes_advice_wanted: String!
    $notes_what_is_common: String!,
    $start_date: timestamp!
    $user_id: uuid!,
  ) {
    insert_connects_one(object: {
      company_name: $company_name, 
      frequency: $frequency, 
      email: $email, 
      first_name: $first_name, 
      last_name: $last_name, 
      notes_about_them: $notes_about_them, 
      notes_advice_wanted: $notes_advice_wanted, 
      notes_what_is_common: $notes_what_is_common, 
      phone_number: $phone_number, 
      start_date: $start_date
      user_id:$user_id
    })
    {
      connect_id
      first_name
      last_name
    }
  }
`;

const UPDATE_CONNECT = `
  mutation (
    $company_name: String!,
    $email: String!, 
    $first_name: String!, 
    $last_name: String!, 
    $phone_number: String!,
    $frequency: String!
    $notes_about_them: String!
    $notes_advice_wanted: String!
    $notes_what_is_common: String!,
    $start_date: timestamp!
    $connect_id: uuid!,
  ) {
    update_connects(
      where: {connect_id: {_eq: $connect_id}},
      _set: {
      company_name: $company_name, 
      frequency: $frequency, 
      email: $email, 
      first_name: $first_name, 
      last_name: $last_name, 
      notes_about_them: $notes_about_them, 
      notes_advice_wanted: $notes_advice_wanted, 
      notes_what_is_common: $notes_what_is_common, 
      phone_number: $phone_number, 
      start_date: $start_date
    })
    {
      affected_rows
    }
  }
`;

const GET_CONNECTS = `
  query {
    connects {
      company_name
      connect_id
      email
      first_name
      frequency
      last_name
      notes_about_them
      notes_advice_wanted
      notes_what_is_common
      phone_number
      start_date
    }
  }
`;

const GET_CONNECT = `
  query GetCoonect($connect_id: uuid) {
    connects(where: {connect_id: {_eq: $connect_id}}){
      company_name
      connect_id
      email
      first_name
      frequency
      last_name
      notes_about_them
      notes_advice_wanted
      notes_what_is_common
      phone_number
      start_date
    }
  }
`;

const DELTE_CONNECT = `mutation DeleteConnect($connect_id: uuid!) {
  delete_connects(where: {connect_id: {_eq: $connect_id}}) {
    affected_rows
  }
}`;

export const createConnect = (variables : Connect) => {
  const body = JSON.stringify({
    query: INSERT_CONNECTS_ONE,
    variables,
  });

  return httpService.post('/graphql', body, axiosConfig);
};

export const updateConnect = (variables : Connect) => {
  const body = JSON.stringify({
    query: UPDATE_CONNECT,
    variables,
  });

  return httpService.post('/graphql', body, axiosConfig);
};

export const getConnects = () => {
  const body = JSON.stringify({
    query: GET_CONNECTS,
  });

  return httpService.post('/graphql', body, axiosConfig);
};

export const getConnect = (connect_id: any) => {
  console.log('INSIDE GET CONNECTION', connect_id);
  const body = JSON.stringify({
    query: GET_CONNECT,
    variables: {
      connect_id,
    },
  });

  return httpService.post('/graphql', body, axiosConfig);
};

export const deleteConnect = (connect_id: any) => {
  const body = JSON.stringify({
    query: DELTE_CONNECT,
    variables: {
      connect_id,
    },
  });

  return httpService.post('/graphql', body, axiosConfig);
};
