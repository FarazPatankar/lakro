export const LAKRO_API_URL =
  process.env.NODE_ENV === 'production'
    ? `${process.env.NEXT_PUBLIC_LAKRO_API_URL}/v1`
    : 'http://localhost:8000/v1';
