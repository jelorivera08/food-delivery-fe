export const URL = window.location.href.split(':')[1].includes('localhost')
  ? 'http://localhost:3000/api/v1'
  : 'https://grabjunjun.herokuapp.com/api/v1';
export const ERROR = 'ERROR';
export const ADMIN = 'admin';
