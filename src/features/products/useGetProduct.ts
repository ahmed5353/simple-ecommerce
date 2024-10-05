import { useQuery } from '@tanstack/react-query';
import { getProduct } from '@/services/apiProducts';
import { Product } from '@/types/Product';

export default function useGetProduct(id: number) {
  const { data, isLoading, error } = useQuery<Product, Error>({
    queryKey: ['product', id],
    queryFn: () => getProduct(id),
  });

  return { data, isLoading, error };
}
