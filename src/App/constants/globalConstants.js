export const URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/v1'
    : 'https://grabjunjun.herokuapp.com/api/v1';

export const ERROR = 'ERROR';
export const ADMIN = 'admin';
