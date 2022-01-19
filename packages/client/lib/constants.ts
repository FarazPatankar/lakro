// Just for now until i setup the api subdomin
export const LAKRO_API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://jbbuj463vh.execute-api.us-west-2.amazonaws.com/v1'
    : 'http://localhost:8000/v1';
