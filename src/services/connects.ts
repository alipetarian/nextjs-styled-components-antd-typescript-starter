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

export const createConnect = (variables : Connect) => {
  const body = JSON.stringify({
    query: INSERT_CONNECTS_ONE,
    variables,
  });

  return httpService.post('/graphql', body, axiosConfig);
};
