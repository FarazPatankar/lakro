import { LAKRO_API_URL } from '../constants';
import useSWR from 'swr';

export const useUser = () => {
  const { data, error } = useSWR('auth/google/me');
  return {
    data,
    loading: !error && !data,
    error,
  };
};

export const apiRequestHandler = async (
  path: string,
  args: Partial<RequestInit> = {}
) => {
  return await fetch(`${LAKRO_API_URL}/${path}`, {
    mode: 'cors',
    ...args,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...args.headers,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(`Something went wrong: ${error}`);
    });
};
