export const LAKRO_API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.lakro.app/v1'
    : 'http://localhost:8000/v1';
