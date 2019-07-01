import { URL } from '../App/constants/globalConstants';
import axios from 'axios';

class api {
  constructor(url) {
    this.url = url;
  }

  login(credentials) {
    let res = axios.post(`${this.url}/user/login`, credentials);
    return res;
  }

  signup(credentials) {
    let res = axios.post(`${this.url}/user/signup`, credentials);
    return res;
  }

  getOrders(username) {
    let res = axios.get(`${this.url}/order/${username}`);
    return res;
  }

  getMenu() {
    let res = axios.get(`${this.url}/menu`);
    return res;
  }

  putOrders(payload) {
    let res = axios.post(`${this.url}/order`, {
      orders: payload.orders,
      username: payload.username,
    });
    return res;
  }
}

const apiInstance = new api(URL);

export default apiInstance;
