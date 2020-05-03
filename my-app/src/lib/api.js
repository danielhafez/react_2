import axios from 'axios';

const baseUrl = `https://5dd14f8d15bbc2001448d07d.mockapi.io/products`;

export function getProduct(productId) {
  return axios.get(`${baseUrl}/${productId}`);
}

export function getAll() {
  return axios.get(baseUrl);
}

export function deleteProduct(productId) {
  return axios.delete(`${baseUrl}/${productId}`);
}
export function createProduct(product) {
  return axios.post(`${baseUrl}`, product);
}
