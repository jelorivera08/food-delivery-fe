import { URL, ERROR } from '../App/constants/globalConstants';
import axios from 'axios';

class api {
  constructor(url) {
    this.url = url;
  }

  login(credentials) {
    let res = axios.post(`${this.url}/user/login`, credentials);
    return res;
  }
}

const apiInstance = new api(URL);

export default apiInstance;
