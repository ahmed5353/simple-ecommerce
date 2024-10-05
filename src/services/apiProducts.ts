import axios from 'axios';
import { Product } from '@/types/Product';

export const getProducts = async (): Promise<{ data: Product[] }> => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response;
};

export const getProduct = async (id: number): Promise<Product> => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
};
