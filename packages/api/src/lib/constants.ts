export const PORT = process.env.PORT ?? 8000;
export const API_URL = process.env.API_URL
  ? `${process.env.API_URL}/v1`
  : 'http://localhost:8000/v1';
