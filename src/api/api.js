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

  deleteOrder(orderId, index) {
    let res = axios.delete(`${this.url}/order`, {
      data: { id: orderId, index },
    });
    return res;
  }

  getAllOrders() {
    let res = axios.get(`${this.url}/order`);

    return res;
  }

  addMenuItem(payload) {
    let res = axios.post(`${this.url}/menu`, {
      name: payload.name,
      price: payload.price,
    });

    return res;
  }

  deleteMenuItem(menuItemId) {
    let res = axios.delete(`${this.url}/menu`, {
      data: { id: menuItemId },
    });

    return res;
  }

  deleteAllOrders() {
    let res = axios.delete(`${this.url}/order`);

    return res;
  }

  getAllUsers() {
    let res = axios.get(`${this.url}/user`);

    return res;
  }

  payDebt(username, paid) {
    let res = axios.post(`${this.url}/user/pay-debt`, {
      username,
      paid,
    });

    return res;
  }

  transferToDebt(orderId) {
    let res = axios.post(`${this.url}/order/transfer-to-debt`, {
      id: orderId,
    });

    return res;
  }

  payOrder(orderId, paid) {
    let res = axios.post(`${this.url}/order/pay`, {
      id: orderId,
      paid,
    });

    return res;
  }
}

const apiInstance = new api(URL);

export default apiInstance;
