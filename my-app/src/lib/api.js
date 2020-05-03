import axios from 'axios';

const baseUrl = `https://5dd14f8d15bbc2001448d07d.mockapi.io/products`;

export function getProduct(productId) {
  return axios.get(`${baseUrl}/${productId}`);
}

export function deleteProduct(productId) {
  return axios.delete(`${baseUrl}`, { params: { id: productId } });
}
export function createUser(product) {
  return axios.post(`${baseUrl}`, product);
}
