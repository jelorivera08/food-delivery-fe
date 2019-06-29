import { URL, ERROR } from '../App/constants/globalConstants';
import axios from 'axios';

class api {
  constructor(url) {
    this.url = url;
  }

  login(credentials) {
    try {
      let res = axios.post(`${this.url}/user/login`, credentials);
      return res;
    } catch (err) {
      console.error('can not log in: ' + err);
      return ERROR;
    }
  }
}

const apiInstance = new api(URL);

export default apiInstance;
