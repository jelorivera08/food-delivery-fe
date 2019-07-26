// export const URL = 'https://grabjunjun.herokuapp.com/api/v1';
// export const URL = 'http://localhost:3000/api/v1';
export const URL =
  process.env._ && process.env._.indexOf('heroku')
    ? 'https://grabjunjun.herokuapp.com/api/v1'
    : 'http://localhost:3000/api/v1';
export const ERROR = 'ERROR';
export const ADMIN = 'admin';
